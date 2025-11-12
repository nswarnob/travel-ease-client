import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'

const MainLayOut = () => {
  return (
    <div className='mx-auto'>
      <header> <Navbar></Navbar> </header>
      <main className='min-h-auto '><Outlet> </Outlet><ToastContainer></ToastContainer> </main>
      <footer><Footer></Footer></footer>
    </div>
  )
}

export default MainLayOut