import React from 'react'
import { Link } from 'react-router-dom';

function Game() {
    return (
        <div className='pt-[60px]'>
            <Link to='/dashboard'>Back to Dashboard</Link>
        </div>
    )
}

export default Game;