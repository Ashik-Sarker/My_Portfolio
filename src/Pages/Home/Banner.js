import React from 'react';

const Banner = () => {
    return (
        <div className='w-3/5 mx-auto text-white mt-24'>
            <h1 className='text-5xl font-bold text-center'>JUNIOR FRONT-END <br /> REACT DEVELOPER</h1>
            <p className='text-lg text-center mt-6' > Specializing in custom theme development.If you 're a <br /> business seeking a web presence or are looking to hire.</p>
            <p className='text-center'><button className='btn btn-accent mt-12 mb-24 px-12 text-white text-lg border-none'><a target="_blank" href="https://drive.google.com/file/d/1NbtHBsZ328sEmSLqAJvVgcSu3jqMXH9C/view?usp=sharing">My Resume</a></button></p>
        </div>
    );
};

export default Banner;