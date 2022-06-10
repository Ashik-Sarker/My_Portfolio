import React from 'react';
import Banner from './Banner';
import GetInTouch from './GetInTouch';
import NavBar from './NavBar';
import Projects from './Projects';
import Skills from './Skills';
import './Home.css';
import Border from '../Common/Border';
import SocialLink from '../Common/SocialLink';

const Home = () => {
    return (
        <div>

            <div className='backgroundBanner rounded-bottom'>
                <NavBar></NavBar>
                <Banner></Banner>
            </div>

            <div>
                <Skills></Skills>
                <Projects></Projects>
                <GetInTouch></GetInTouch>
                <SocialLink></SocialLink>
            </div>

        </div>
    );
};

export default Home;