import React, { useEffect, useState } from 'react'

const Game = () => {

    const [value, setValue] = useState('');

    // useEffect(() => {
    //     fetch('/hello').then(res => res.json()).then((res) => {
    //         console.log(res);
    //         setValue(res.message);
    //     })
    // }, [])

    return (
        <>
            <div className='text-3xl flex justify-center'>Game</div>
            <div className='text-3xl flex justify-center'>Hi</div>
        </>
    )
}

export default Game;