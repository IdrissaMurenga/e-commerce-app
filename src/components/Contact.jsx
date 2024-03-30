import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div className=' p-4 lg:w-[74rem] mx-auto lg:flex justify-around'>
            <div>
                <h1 className='text-3xl font-bold'>Thanks For Contacting Us</h1>
                <p className='lg:w-96 pt-4'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Link to="/about">
                    <button className='mt-4 btn btn-outline'>Learn More</button>
                </Link>
            </div>
            <form className='*:my-2 grid'>
                <div>
                    <input className='w-96 p-2 border-2 rounded-full' type="text" placeholder='your name' />
                </div>
                <div>
                    <input className='w-96 p-2 border-2 rounded-full' type="email" placeholder='your email' />
                </div>
                <button className='w-96 btn btn-primary'>submit</button>
            </form>
        </div>
    )
}

export default Contact
