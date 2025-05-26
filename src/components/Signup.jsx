import React from 'react'
import { createBrowserRouter, NavLink, RouterProvider, useNavigate } from 'react-router-dom'

const signup = () => {

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/signup/page');
  }

  return (
    <>
      <form action="" className='flex flex-col items-center justify-center min-h-screen gap-4'>
        <h1 className='font-bold text-4xl'>Create your</h1>
        <h1 className='font-bold text-4xl' >PopX account</h1>
        <div className='flex flex-col items-center justify-center gap-4'>
          <div className='w-full flex flex-col '>
            <label htmlFor="">Full Name</label>
            <input type="text" placeholder='Marry Doe' className='p-4 rounded-[10px] w-full border-2 border-purple-900 focus:outline-none focus:border-purple-500' required />
          </div>
          <div className='w-full flex flex-col '>
            <label htmlFor="">Phone Number</label>
            <input type="text" placeholder='0123456789' className='p-4 rounded-[10px] w-full border-2 border-purple-900 focus:outline-none focus:border-purple-500' required  />
          </div>
          <div className='w-full flex flex-col '>
            <label htmlFor="">Email Address</label>
            <input type="email" placeholder='Enter Email Address' className='p-4 rounded-[10px] w-full border-2 border-purple-900 focus:outline-none focus:border-purple-500' required  />
          </div>
          <div className='w-full flex flex-col '>
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Enter your Password' className='p-4 rounded-[10px] w-full border-2 border-purple-900 focus:outline-none focus:border-purple-500' required  />
          </div>
          <div className='w-full flex flex-col '>
            <label htmlFor="">Company Name</label>
            <input type="text" placeholder='Your Company Name' className='p-4 rounded-[10px] w-full border-2 border-purple-900 focus:outline-none focus:border-purple-500' required  />
          </div>
          <div className=''>
            <h3>Are you an Agency?</h3>
            <div className='input flex'>
              <input type="radio" name="agency" id="yes" value="yes" className='mr-2' />
              <label htmlFor="yes">Yes</label>
              <input type="radio" name="agency" id="no" value="no" className='ml-4 mr-2' />
              <label htmlFor="no">No</label>
            </div>
          </div>
          <div className='py-10'>
            <button onClick={handleSignup} type='submit' className='cursor-pointer p-4 bg-purple-900 text-white rounded-[10px] w-xl font-bold hover:bg-purple-700'>SignUp</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default signup