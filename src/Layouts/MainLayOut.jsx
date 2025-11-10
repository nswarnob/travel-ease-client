import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'

const MainLayOut = () => {
  return (
    <div>
      <header> <Navbar></Navbar> </header>
      <main className='min-h-screen '><Outlet></Outlet></main>
      <footer><Footer></Footer></footer>
    </div>
  )
}

export default MainLayOut