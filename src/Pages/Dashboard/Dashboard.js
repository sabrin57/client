import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-4xl font-serif test-purple-500'>DashBoard</h2>
                <Outlet></Outlet>
                
            </div>
            <div class="drawer-side" style={{background:'#a5b4fc'}}>
                <label tabIndex='1' for="sidebar" class="drawer-overlay"></label>
                <ul style={{background:'#a5b4fc'}} className="menu p-2 m-3 w-60 bg-base-100 text-base-content text-xl font-serif ">

                    <li><Link to="/dashboard">My Appointment</Link></li>
                    <li><Link to="myreview">Review</Link></li>
                    <li><Link to="alluser">All User</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;