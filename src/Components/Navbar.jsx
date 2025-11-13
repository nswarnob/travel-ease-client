import React, { useContext } from "react";
import { NavLink } from "react-router";
import logo from "../assets/logo-white.png";
import { AuthContext } from "../Providers/AuthProvider";
import ThemeControler from "./ThemeControler";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `px-3 py-2 transition-all duration-300 hover:text-accent ${
              isActive ? "text-accent font-semibold" : "text-secondary-content"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-vehicles"
          className={({ isActive }) =>
            `px-3 py-2 transition-all duration-300 hover:text-accent ${
              isActive ? "text-accent font-semibold" : "text-secondary-content"
            }`
          }
        >
          All Vehicles
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/my-vehicles"
            className={({ isActive }) =>
              `px-3 py-2 transition-all duration-300 hover:text-accent ${
                isActive ? "text-accent font-semibold" : "text-secondary-content"
              }`
            }
          >
            My Vehicles
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            to="/add-vehicles"
            className={({ isActive }) =>
              `px-3 py-2 transition-all duration-300 hover:text-accent ${
                isActive ? "text-accent font-semibold" : "text-secondary-content"
              }`
            }
          >
            Add Vehicles
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            to="/my-bookings"
            className={({ isActive }) =>
              `px-3 py-2 transition-all duration-300 hover:text-accent ${
                isActive ? "text-accent font-semibold" : "text-secondary-content"
              }`
            }
          >
            My Bookings
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="bg-white shadow-sm sticky top-0 z-50">
      <div className="navbar max-w-6xl mx-auto">
        {/* Left Side */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-primary lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-accent rounded-box z-1 mt-3 w-52 p-2 shadow-md"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <NavLink
            to="/home"
            className="btn bg-primary border-none rounded-full shadow-md hover:scale-105 transition-transform"
          >
            <img src={logo} className="h-5 w-5" alt="TravelEase logo" />
          </NavLink>
        </div>

        {/* Center Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-semibold text-primary-content text-lg">{links}</ul>
        </div>

        {/* Right Side (Auth) */}
        <div className="navbar-end flex items-center space-x-2">
            <div>
              {
              user && <img src={user?.photoURL || 'https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70._SX1080_FMjpg_.jpg' } alt="User Avatar" className="rounded-full h-10 w-10" onError={(e) => {
                    e.target.src = 'https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70._SX1080_FMjpg_.jpg';
                  }} />
            }
            </div>
         <div>
               <ThemeControler></ThemeControler>
         </div>
          {user ? (
            <button
              onClick={logOut}
              className="btn rounded-full bg-primary text-white border-none shadow-md hover:bg-accent hover:scale-105 transition-transform"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className="btn rounded-full bg-primary text-white border-none shadow-md hover:bg-accent hover:scale-105 transition-transform"
            >
              Login
            </NavLink>
          )}
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
