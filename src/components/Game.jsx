import { async } from '@firebase/util';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Spinner';

function Game() {

    const [questions, setQuestions] = useState(null);
    const [topics, setTopics] = useState(null);
    const [currentTopic, setCurrentTopic] = useState();
    const [difficulty, setDifficulty] = useState('easy');
    const levels = ['easy', 'medium', 'hard'];
    /* 
        1 -> easy
        2 -> medium
        3 -> hard
    */

    const fetchTopics = async () => {
        const res = await axios.get('/game/topics');
        setTopics(res.data);
        setCurrentTopic(res.data[0].id);
    }

    useEffect(() => {
        fetchTopics();
    }, []);

    const fetchQuestions = async () => {
        const res = await axios.get(`/game/questions?topic=${currentTopic}&difficulty=${difficulty}`);
        setQuestions(res.data);
    }

    return (
        <>
            <div className='pt-[60px]'>
                <Link to='/dashboard'>Back to Dashboard</Link>
            </div>

            {!topics && <Spinner />}

            {topics && <div>
                <select name="category" value={currentTopic} onChange={e => setCurrentTopic(e.target.value)}>
                    {topics.map((topic) => {
                        return <option key={topic.id} value={topic.id}>{topic.name}</option>
                    })}
                </select>
                <select name="difficulty" value={difficulty} onChange={e => setDifficulty(e.target.value)}>
                    {levels.map((level, index) => {
                        return <option key={index} value={level}>{level}</option>
                    })}
                </select>
            </div>}

            <button onClick={fetchQuestions}>Start</button>
        </>
    )
}

export default Game;