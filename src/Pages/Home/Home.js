import React from 'react';
import Banner from './Banner';
import GetInTouch from './GetInTouch';
import Projects from './Projects';
import Skills from './Skills';
import './Home.css';
import Footer from '../Common/Footer';
import Border from '../Common/Border';
import NavBar from './NavBar';

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
                <Border></Border>
                <GetInTouch></GetInTouch>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Home;