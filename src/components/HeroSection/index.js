import React, {useState} from 'react';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP} from './HeroElements'
import {HeroBtnWrapper, ArrowForward, ArrowRight, Button} from '../Buttons'
import Video from '../../assets/video3.mp4'


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
                <HeroP>
                 Welcome to my universe! Enjoy your stay
                </HeroP>

                {/* <HeroBtnWrapper>
                    <Button to='contact' 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    >
                        Hire me {hover? <ArrowForward/> : <ArrowRight/> }
                    </Button>
                </HeroBtnWrapper> */}
            </HeroContent>
        </HeroContainer>
    )

}