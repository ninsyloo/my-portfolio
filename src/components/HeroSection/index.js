import React, {useState} from 'react';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP} from './HeroElements'
import Video from '../../assets/video3.mp4'
import Typical from 'react-typical'

export default function HeroSection(){
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover)
    }

    return(
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                  Eve Real
                </HeroH1>
                <Typical
                 steps={['Welcome!', 1000, 'Enjoy your Stay', 1000]}
                 loop={Infinity}
                 wrapper={HeroP}
                 />
            </HeroContent>
        </HeroContainer>
    )

}