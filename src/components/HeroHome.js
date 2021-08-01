import React from 'react';
import { Button } from './Button';
import './HeroHome.css';
import '../App.css';

function HeroHome() {
    return (
        <div className='hero-container'>
            {/* FOR VIDEO ON HERO HOME INSTEAD OF IMAGE*/}
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1> <i>Kangaroo Learning</i> </h1>
            <p> A fully comprehensive learning platform for the 11+</p>
            <div className="hero-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                > Link 1 
                </Button>
                <Button 
                className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                onClick={console.log('button works')}
                > Link 2
                <i className='far fa-play-circle'/> {/*Video logo can be edited out here*/}
                </Button>
                
            </div>
        </div>
    );
}

export default HeroHome;
