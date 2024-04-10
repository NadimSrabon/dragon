import React, { useContext } from 'react';

import userImage from "../../src/assets/Images/user.png"
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {

    const {user,logOut} = useContext(AuthContext);

    function handleLogOut(){
        logOut()
        .then()
        .catch()
    }


    return (
        <div className="navbar bg-base-100 font-poppins mt-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#706F6F] -translate-x-44">
                        <NavLink to="/"><li><a>Home</a></li></NavLink>
                        <NavLink><li><a>About</a></li></NavLink>
                        <NavLink><li><a>Career</a></li></NavLink>

                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[#706F6F] -translate-x-44">
                    <NavLink to="/"><li><a>Home</a></li></NavLink>
                    <NavLink><li><a>About</a></li></NavLink>
                    <NavLink><li><a>Career</a></li></NavLink>
                </ul>
            </div>
            <div className='flex gap-4 translate-x-10'>

                <img className='h-10' src={userImage} alt="" />
                {
                    user ?
                    <button onClick={handleLogOut} className='btn'>Sing Out</button>
                    :<NavLink to="/login"><a className="btn bg-black text-white">Login</a></NavLink>
                }
                
            </div>
        </div>
    );
};

export default Navbar;