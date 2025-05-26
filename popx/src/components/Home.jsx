import React from 'react'
import { NavLink } from 'react-router-dom'


const Home = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen gap-4">
                <h1 className='font-bold text-4xl'>Welcome to Popx</h1>
                <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias architecto ea sequi cum, vero aut nesciunt nulla.</p>
                <button className='cursor-pointer p-4 bg-purple-900 text-white rounded-[10px] w-1/4 font-bold hover:bg-purple-700'>
                    <NavLink to='/signup'>
                        Create Account
                    </NavLink>
                </button>
                <button className='cursor-pointer p-4 bg-purple-500 text-white rounded-[10px] w-1/4 font-bold hover:bg-purple-700'>
                    <NavLink to='/login'>
                        Already Registered? Login
                    </NavLink>
                </button>
            </div>
        </>
    )
}

export default Home