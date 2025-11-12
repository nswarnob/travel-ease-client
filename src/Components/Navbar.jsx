import React, { useContext } from 'react'
import { NavLink } from 'react-router'
import logo from '../assets/logo-white.png'
import { AuthContext } from '../Providers/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);


  const links = <>
    <nav className='space-x-2 text-primary-content sm:grid md:grid lg:flex font-bold'>
      <NavLink to={'home'} >Home </NavLink>
      <NavLink to={'all-vehicles'} >All Vehicles </NavLink>
      {
        user && <NavLink to={'my-vehicles'} >My Vehicles</NavLink>
      }
      {
        user && <NavLink to={'add-vehicles'} >Add Vehicles</NavLink>
      }
      {
        user && <NavLink to={'my-bookings'} >My Bookings</NavLink>
      }
    </nav>
  </>


  return (
    <div>
      <div className="navbar bg-secondary shadow-sm">
        <div className="navbar-start">
          <div className="dropdown text-white">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-accent rounded-box z-1 mt-3 w-52 p-2 shadow">
              {
                links
              }
            </ul>
          </div>
          <NavLink to={'/home'}> <img src={logo} className='h-6 w-6' alt="" /> </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
              links
            }
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <NavLink to={'home'} className={'btn rounded-full bg-primary text-white'} onClick={logOut} >Logout</NavLink> : <NavLink to={'login'} className={'btn rounded-full bg-primary text-white'} >Login</NavLink>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar