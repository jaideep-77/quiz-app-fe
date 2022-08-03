import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from './Spinner';
import Flashcard from './Flashcard';
import { getQuestions, getTopics } from '../api/game';
import { Signout } from '../Auth/AuthProvider';

function Game() {

    const [questions, setQuestions] = useState(null);
    const [topics, setTopics] = useState(null);
    const [currentTopic, setCurrentTopic] = useState();
    const [difficulty, setDifficulty] = useState('easy');
    const levels = ['easy', 'medium', 'hard'];
    const [game, setGame] = useState(false);
    const navigate = useNavigate();

    const validateResponse = (res) => {
        if (res.status == 403) {
            alert('Not Authenticated');
            logout();
            return false;
        }

        if (res.data.message) {
            alert('Error occured');
            navigate('/dashboard');
            return false;
        }
        return true;
    }

    const fetchTopics = async () => {
        try {
            const res = await getTopics(localStorage.getItem('token'));
            if (validateResponse(res)) {
                setTopics(res.data);
                setCurrentTopic(res.data[0].id);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const logout = async () => {
        await Signout();
        navigate('/');
    }

    useEffect(() => {
        if (localStorage.getItem('questions')) {
            setGame(true);
            setQuestions(JSON.parse(localStorage.getItem('questions')));
        } else {
            fetchTopics();
        }
    }, []);

    const decode = (str) => {
        const text = document.createElement('textarea');
        text.innerHTML = str;
        return text.value;
    }

    const startGame = async () => {
        try {
            const res = await getQuestions(localStorage.getItem('token'), currentTopic, difficulty);

            if (validateResponse(res)) {
                res.data.map(question => {
                    question.question = decode(question.question);
                    question.choices.map(choice => decode(choice));
                });

                localStorage.setItem('questions', JSON.stringify(res.data));
                setQuestions(res.data);
                setGame(true);
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    if (!game) return (
        <div className='pt-[60px]'>
            <div>
                <Link to='/dashboard'>Back to Dashboard</Link>
            </div>

            {!topics && <Spinner />}

            {topics?.length > 0 && <div className='flex flex-col items-center'>

                <span className='mt-10 text-base text-white md:text-xl'>Let's take a look at some of the topics available and select your desired difficulty</span>

                <div className='space-y-5 space-x-5'>
                    <select name="category" value={currentTopic} onChange={e => setCurrentTopic(e.target.value)} className='w-[120px] md:w-min'>
                        {topics.map((topic) => {
                            return <option key={topic.id} value={topic.id} className='text-sm'>{topic.name}</option>
                        })}
                    </select>
                    <select name="difficulty" value={difficulty} onChange={e => setDifficulty(e.target.value)} className='w-[120px] md:w-min'>
                        {levels.map((level, index) => {
                            return <option key={index} value={level}>{level}</option>
                        })}
                    </select>
                </div>

                <button className='hover:border-b-4 hover:border-pink-600 px-2 text-gray-300 mt-5 text-2xl' onClick={startGame}>Start</button>
            </div>}
        </div>
    )


    if (game) return (
        <div className='pt-[60px] space-y-4'>
            {questions.map((question, index) => {
                return <Flashcard key={`flashcard${index}`} question={question} />
            })}
        </div>
    )
}

export default Game;