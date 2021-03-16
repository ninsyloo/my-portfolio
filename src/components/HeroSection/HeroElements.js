import styled from 'styled-components';

export const HeroContainer = styled.div`
background: #000;
display:flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1;
`
/* add before styles*/

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`
export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #000;
`
export const HeroContent = styled.div`
z-index: 3;
background:#000;
opacity: 80%;
border-radius: 10px;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`

export const HeroH1 = styled.h1`
color:#fff;
font-family: lacquer;
font-size: 4rem;
text-align: center;
`

export const HeroP = styled.p`
magin-top:24px;
color: #fff;
font-family: lacquer, syne mono;
font-size: 2rem;
text-align: center; 
max-width: 600px;
`

export const HeroBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`
