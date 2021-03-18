import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll'

export const SideContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #000;
display: grid;
align-items: center;
top:0;
left:0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen? '0' : '-100%')};
`
export const CloseIcon = styled(FaTimes)`
color: #fff;
&:hover {
    color: #e36bae;
    transition: 0.2s ease-in-out;
}
`
export const Icon = styled.div`
position:absolute;
top: 1.2rem;
right: 1.5rem;
background:transparent;
font-size: 1rem;
cursor: pointer;
outline: none;
`
export const SidebarWrapper = styled.div`
color: #000;
`
export const SidebarMenu = styled.ul`
display:grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(5, 80px);
text-align: center;

@media screen and (max-width: 480px){
    grid-template-rows: repeat(5, 80px)
}
`

export const SidebarLink = styled(LinkS)`
display:flex;
align-items: center;
justify-content: center;
text-decoration: none;
font-family: Lekton;
font-weight: bold;
font-size:1.4rem;
list-style: none;
color: #fff;
cursor: pointer;
position: relative;
white-space: nowrap;
counter-increment: itemcounter;

/**GLITCH EFFECT**/

:before {
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    content: counters(itemcounter, ".", decimal-leading-zero);
} 

:before,
:after {
    position: absolute;
    width: 100%;
    height: 1px;
    background: currentColor;
    top: 100%;
    left: 0;
    pointer-events: none;
}

:before {
    content: '';
    /* show by default */
}

/*code from before*/

&:hover{
    color: #e36bae;
    transition: 0.2s ease-in-out;
}

/* in case I need to erase*/

&:hover span {
    animation: glitchText 0.4s linear;
}

@keyframes glitchText {
    0% {
        opacity: 1;
        transform: translate3d(-10px, 0, 0) scale3d(-1, -1, 1);
        -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
        clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
    }

    10% {
        -webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
        clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
    }

    20% {
        -webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
        clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
    }

    35% {
        -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
        clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
    }

    50% {
        -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
        clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
    }

    60% {
        -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
        clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
    }

    70% {
        -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
        clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
    }

    80% {
        -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
        clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
    }

    90% {
        transform: translate3d(-10px, 0, 0) scale3d(-1, -1, 1);
    }

    100% {
        opacity: 1;
        transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
}

:before {
    height: 2px;
    opacity: 0;
}

&:hover::before {
    opacity: 1;
    animation: glitchLine 0.4s steps(2, start) forwards;
}

@keyframes glitchLine {
    0% {
        transform: scale3d(1, 1, 1);
    }

    10% {
        transform: translate3d(10px, 0, 0);
    }

    20% {
        transform: translate3d(0, 4px, 0);
    }

    30% {
        transform: scale3d(0.1, 1.4, 1) translate3d(0, -25px, 0);
        transform-origin: 100% 0%;
    }

    40% {
        transform: scale3d(1, 0.3, 1) translate3d(0, 25px, 0);
    }

    50% {
        transform: scale3d(0.5, 0.3, 1) translate3d(-100px, -80px, 0);
    }

    60% {
        transform: scale3d(1, 1.25, 1) translate3d(10px, -5px, 0);
    }

    70% {
        transform: scale3d(0.5, 0.5, 1) translate3d(0, 20px, 0);
    }

    80% {
        transform: translate3d(-30, 10px, 0) scale3d(1, 0.4, 1);
        transform-origin: 100% 0%;
    }

    90% {
        transform: scale3d(1, 0.5, 1) translate3d(0, -15px, 0);
        ;
        transform-origin: 0% 50%;
    }

    100% {
        opacity: 1;
    }
}

`