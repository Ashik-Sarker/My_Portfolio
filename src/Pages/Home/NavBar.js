import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div style={{background:"blueViolet"}}>
            <div class="navbar w-3/5 mx-auto text-white">
                <div class="navbar-start">
                    <Link to="/"><span style={{fontFamily:"'Dancing Script', cursive"}} className="text-2xl md:text-4xl">Abu Taher Sarker</span></Link>
                </div>
                
                <div class="navbar-end">
                    <div class="hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><a href='#skill'>Skills</a></li>
                        <li><a href='#project'>Projects</a></li>
                        <li><a href='#about'>About Myself</a></li>
                        <li><a href='#contact'>Connect me</a></li>
                        <li><a href='/blogs'>Blogs</a></li>
                    </ul>
                </div>
                    <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="text-black menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Skills</a></li>
                        <li><a>Projects</a></li>
                        <li><a>About Myself</a></li>
                        <li><a>Contact me</a></li>
                        <li><a>Blogs</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;