import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { NavLink } from 'react-router';

const Footer = () => {
    const { user} = useContext(AuthContext);
  return (
    <footer className="bg-white text-base-content py-10 px-5 md:px-10 font-light">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6 text-center">
        
        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
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
        </ul>

        {/* Social Icons */}
        <div className="flex gap-5">
          <a
            href="#"
            className="hover:scale-110 transition-transform duration-300 text-primary"
            aria-label="Twitter"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 4.557a9.9 9.9 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.863 9.863 0 0 1-3.127 1.195A4.917 4.917 0 0 0 12.6 8.036 13.946 13.946 0 0 1 1.671 3.149a4.923 4.923 0 0 0 1.523 6.574 4.897 4.897 0 0 1-2.229-.616v.061A4.926 4.926 0 0 0 4.92 13.4a4.903 4.903 0 0 1-2.224.084 4.937 4.937 0 0 0 4.6 3.419A9.867 9.867 0 0 1 0 19.54a13.945 13.945 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A9.935 9.935 0 0 0 24 4.557z" />
            </svg>
          </a>

          <a
            href="#"
            className="hover:scale-110 transition-transform duration-300 text-primary"
            aria-label="YouTube"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z" />
            </svg>
          </a>

          <a
            href="#"
            className="hover:scale-110 transition-transform duration-300 text-primary"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 8H6v4h3v12h5V12h3.642l.358-4h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
            </svg>
          </a>
        </div>

        {/* Footer Text */}
        <aside className="text-sm text-info">
          <p>
            Copyright © {new Date().getFullYear()} — All rights reserved by{' '}
            <span className="font-semibold text-accent">TravelEase</span> — Vehicle Booking & Trip Management Platform
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
