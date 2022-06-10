import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/mf-avatar.svg'

const Footer = () => {
    return (
        <div style={{background:"blueViolet", borderTopLeftRadius:"400px"}} className="pt-32 pb-24 md:py-24 text-slate-300">
            <div className='text-center'>
                <img className='block mx-auto mb-12' src={img} alt="" />
                <Link to="/"><span style={{fontFamily:"'Dancing Script', cursive"}} className="text-2xl md:text-6xl">Abu Taher Sarker</span></Link>
                <p className='mt-2 mb-6'>Living, learning, & leveling up one day at a time.</p>
                <a className='text-green-500 underline mr-12' href="https://github.com/Ashik-Sarker" target="_blank">GitHub</a>

                <a className='text-green-500 underline' href="https://www.linkedin.com/in/abu-taher-sarker-b0b756170/" target="_blank">LinkedIn</a>
            </div>
            <div></div>

        </div>
    );
};

export default Footer;