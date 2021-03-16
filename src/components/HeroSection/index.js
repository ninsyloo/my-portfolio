import React from 'react';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper} from './HeroElements'
import Video from '../../assets/keyboard.mp4'


export default function HeroSection(){

    return(
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                   Loren Ipsun 
                </HeroH1>
                <HeroP>
                 Hi! Welcome to my universe! Enjoy your stay
                </HeroP>
                <HeroBtnWrapper>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )

}