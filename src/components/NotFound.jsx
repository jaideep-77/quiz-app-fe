import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <div className='flex justify-center text-3xl'>NotFound</div>
            <Link to='/'> Home </Link>
        </>
    )
}

export default NotFound;