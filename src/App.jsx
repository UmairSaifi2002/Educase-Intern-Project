import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, NavLink, RouterProvider } from 'react-router-dom'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Home from './components/Home.jsx'
import Page from './components/page.jsx'


function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      element: <Home />
    },
    {
      path : '/login',
      element: <Login />
    },
    {
      path : '/signup',
      element: <Signup />
    },
    {
      path: '/login/page',
      element: <Page />
    },
    {
      path: '/signup/page',
      element: <Page />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
