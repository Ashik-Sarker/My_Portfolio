import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <button class="btn btn-primary"><Link to="/">Comming Soon Now Back to Home</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Blogs;