import React from 'react'
import { useEffect } from 'react';

function Flashcard({ question, setGame }) {

    return (
        <div>
            <div>{question.id + 1 + '. ' + question.question}</div>
        </div>
    )
}

export default Flashcard