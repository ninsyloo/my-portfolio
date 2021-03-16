import React, {useState} from 'react';
import Navigation from '../components/Navigation'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'

export default function Home(){

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return(
        <div>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navigation toggle={toggle}/>
        <HeroSection/>
        </div>
    )
}
