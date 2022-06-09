import React from 'react';
import { Link } from 'react-router-dom';

const SocialLink = () => {
    return (
        <div style={{width:"200px"}} className='mx-auto mb-12 text-center'>
            <a target='_blank' className='text-primary mx-12' href="https://www.linkedin.com/in/abu-taher-sarker-b0b756170/">LinkedIn</a>
            <a className='text-success' target="_blank" href="https://github.com/Ashik-Sarker">GitHub</a>
        </div>
    );
};

export default SocialLink;