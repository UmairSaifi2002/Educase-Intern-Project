import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/login/page');
  };

  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
        <h1 className='font-bold text-4xl'>Signin to your</h1>
        <h1 className='font-bold text-4xl'>Popx account</h1>
        <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias architecto ea sequi cum, vero aut nesciunt nulla.</p>
        <form action="">
          <div className='flex flex-col items-center justify-center gap-4'>
            <div className='w-full flex flex-col '>
              <label htmlFor="">Email Address</label>
              <input type="email" placeholder=' Enter Email Address' className='p-4 rounded-[10px] w-full border-2 border-purple-900 focus:outline-none focus:border-purple-500' />
            </div>
            <div  className='w-full flex flex-col '>
              <label htmlFor="">Password</label>
              <input type="password" placeholder='Enter Password' className='p-4 rounded-[10px] w-ful border-2 border-purple-900 focus:outline-none focus:border-purple-500' />
            </div>
            <button onClick={handleLogin} type='submit' className='cursor-pointer p-4 bg-purple-900 text-white rounded-[10px] w-full font-bold hover:bg-purple-700'>
              {/* <NavLink to="/login/page"> */}
                Login
              {/* </NavLink> */}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default login