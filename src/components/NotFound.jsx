import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <div className='flex justify-center text-3xl'>NotFound</div>
            <Link to='/dashboard'> Dashbaord </Link>
        </>
    )
}

export default NotFound;