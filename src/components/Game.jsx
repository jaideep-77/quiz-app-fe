import { async } from '@firebase/util';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
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

    const fetchTopics = async () => {
        const res = await getTopics(localStorage.getItem('token'));
        if (res.data.message) {
            logout();
        }
        console.log(res);
        setTopics(res.data);
        setCurrentTopic(res.data[0].id);
    }

    const logout = async () => {
        await Signout();
        navigate('/');
    }

    useEffect(() => {
        fetchTopics();
    }, []);

    const decode = (str) => {
        const text = document.createElement('textarea');
        text.innerHTML = str;
        return text.value;
    }

    const startGame = async () => {
        try {
            const res = await getQuestions(localStorage.getItem('token'), currentTopic, difficulty);
            if (res.data.message) {
                logout();
            }

            res.data.map(question => {
                question.question = decode(question.question);
                question.choices.forEach(choice => decode(choice));
            });

            setQuestions(res.data);
            setGame(true);
        } catch (err) {
            console.log(err.message);
            alert('Error occured');
        }
    }

    if (!game) return (
        <div className='pt-[60px]'>
            <div>
                <Link to='/dashboard'>Back to Dashboard</Link>
            </div>

            {!topics && <Spinner />}

            {topics && <div className='flex flex-col items-center'>

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
                return <Flashcard question={question} key={index} />
            })}
        </div>
    )
}

export default Game;