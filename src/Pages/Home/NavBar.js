import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div class="navbar w-3/5 mx-auto text-white">
            <div class="flex-1">
                <Link to="/"><span style={{fontFamily:"'Dancing Script', cursive"}} className="text-2xl md:text-4xl">Abu Taher Sarker</span></Link>
            </div>
            <div class="flex-none">
                <button class="btn btn-outline btn-accent">Say Hello</button>
            </div>
        </div>
    );
};

export default NavBar;