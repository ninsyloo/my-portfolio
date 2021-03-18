import React from 'react';
import HeroSection from '../components/HeroSection'
import About from './About'
import MyStack from './MyStack'
import Projects from './Projects'
import Contact from './Contact'

export default function Home(){

    return(
        <div>
        <HeroSection/>
        <About/>
        <MyStack/>
        <Projects/>
        <Contact/>
        </div>
    )
}
