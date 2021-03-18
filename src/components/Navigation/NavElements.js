import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const Nav= styled.nav`
background: #000;
opacity: 80%;
height: 80px;
margin-top: -80px;
display: flex;
justify-content: center;
align-item: center;
font-size:1rem;
position: sticky;
top:0;
z-index:10;

@media screen and (max-width:960px) {
    transition: 0.8s all ease;
}
`
export const NavContainer = styled.div`
display:flex;
justify-content: space-between;
height:80px;
z-index: 1;
width: 100%;
padding:0 24px;
max-width:1100px;
`

export const NavLogo = styled(LinkR)`
color: #fff;
dispay:flex;
justify-self: flex-start;
font-size: 4rem;
font-family: lekton;
cursor: pointer;
font-weight: bold;
text-decoration: none;
&:hover {
    color: #e36bae;
    transition: 0.2s ease-in-out;
}
`
export const MobileIcon = styled.div`
display: none;
@media screen and (max-width:768px){
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor:pointer;
    color: #fff;
    &:hover {
        color: #e36bae;
        transition: 0.2s ease-in-out;
    }
}
`
export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 760px){
    display:none;
}
`

export const NavItem=styled.li`
height:60px;
`

export const NavLinks = styled(LinkS)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
font-size: 1.3rem;
font-family: lekton;
font-weight: bold;
padding: 0 1rem;
height: 100%;
cursor:pointer;
&:hover {
    color: #e36bae;
    transition: 0.2s ease-in-out;
};
&::before,
&::after {
	display: inline-block;
	opacity: 0;
	-webkit-transition: -webkit-transform 0.3s, opacity 0.2s;
	-moz-transition: -moz-transform 0.3s, opacity 0.2s;
	transition: transform 0.3s, opacity 0.2s;
}

&::before {
	margin-right: 10px;
	content: '[';
	-webkit-transform: translateX(20px);
	-moz-transform: translateX(20px);
	transform: translateX(20px);
}

&::after {
	margin-left: 10px;
	content: ']';
	-webkit-transform: translateX(-20px);
	-moz-transform: translateX(-20px);
	transform: translateX(-20px);
}

&:hover::before,
&:hover::after,
&:focus::before,
:focus::after {
	opacity: 1;
	-webkit-transform: translateX(0px);
	-moz-transform: translateX(0px);
	transform: translateX(0px);
}
}
`