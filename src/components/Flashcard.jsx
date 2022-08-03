import React from 'react'
import { useState } from 'react';

function Flashcard({ question, setGame }) {

    const [answer, setAnswer] = useState(null);

    return (
        <div>
            <div>{question.id + 1 + '. ' + question.question}</div>
            <div>
                {question.choices.map((choice, index) => {
                    return <div key={index}> <input type='radio' value={choice} checked={answer === choice} onChange={(e) => {
                        console.log(e.target.value);
                        setAnswer(e.target.value);
                    }} />
                        <span>{choice}</span>
                        <br></br>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Flashcard