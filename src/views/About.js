import React, {useState} from 'react';
import Navigation from '../components/Navigation'
import Sidebar from '../components/Sidebar'

export default function AboutMe(){

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return(
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navigation toggle={toggle}/>
        </>
    )
}