import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import auth from '../../../firebase.init';
import { signOut } from "firebase/auth";

const Navigation = () => {
  const [user] = useAuthState(auth);
  const logOut =() => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  }

  const menuitem = <>
    <li className='text-xl font-serif hover:text-white hover:bg-pink-700  transition ease-in-out delay-150  hover:skew-y-6 hover:translate-x-2 animate__zoomIn'><Link to="/">Home </Link></li>
    <li className='text-xl font-serif hover:text-white hover:bg-cyan-700  transition ease-in-out delay-150  hover:skew-y-6 hover:translate-x-2'><Link to="/appointment">Apointment</Link></li>
    <li className='text-xl font-serif  hover:text-white hover:bg-cyan-700  transition ease-in-out delay-150  hover:skew-y-6 hover:translate-x-2'><Link to="/services">Service</Link></li>
    <li className='text-xl font-serif hover:text-white hover:bg-cyan-700  transition ease-in-out delay-150  hover:skew-y-6 hover:translate-x-2'><Link to="/contact">Contact us </Link></li>
    <li className='text-xl font-serif hover:text-white hover:bg-cyan-700  transition ease-in-out delay-150  hover:skew-y-6 hover:translate-x-2'><Link to="/about">About</Link></li>
    {
      user && <li className='text-xl font-serif hover:text-white hover:bg-cyan-700  transition ease-in-out delay-150  hover:skew-y-6 hover:translate-x-2'><Link to="/dashboard">Dashboard</Link></li>
    }
    <li className='text-xl font-serif hover:text-white hover:bg-cyan-700  transition ease-in-out delay-150  hover:skew-y-6 hover:translate-x-2'>{ user ? <button onClick={logOut} class="btn btn-ghost">SignOut</button>: <Link to="/login">Login</Link>}</li>
  </>
  return (
    <div class="navbar bg-indigo-200">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
           <div>
           {menuitem}
           </div>
          </ul>
        </div>
        <a  class="btn btn-ghost normal-case text-xl">Doctors Website</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
         {menuitem}
        </ul>
      </div>
      <div className='navbar-end'>
        <label tabIndex='1'  for="sidebar" class="btn btn-primary drawer-button lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      </div>
      
    </div>
  );
};

export default Navigation;