import { async } from '@firebase/util';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Spinner';
import Flashcards from './Flashcards';
import { getTopics } from '../api/game';

function Game() {

    const [questions, setQuestions] = useState(null);
    const [topics, setTopics] = useState(null);
    const [currentTopic, setCurrentTopic] = useState();
    const [difficulty, setDifficulty] = useState('easy');
    const levels = ['easy', 'medium', 'hard'];
    const [game, setGame] = useState(false);
    /* 
        1 -> easy
        2 -> medium
        3 -> hard
    */

    const fetchTopics = async () => {
        const res = await getTopics(localStorage.getItem('token'));
        setTopics(res.data);
        setCurrentTopic(res.data[0].id);
    }

    useEffect(() => {
        fetchTopics();
    }, []);

    const startGame = async () => {
        try {
            const res = await axios.get(`/game/questions?topic=${currentTopic}&difficulty=${difficulty}`);
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
        <div className='pt-[60px]'>
            <Flashcards setGame={setGame} />
        </div>
    )
}

export default Game;