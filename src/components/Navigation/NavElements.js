import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const Nav= styled.nav`
background: #B4F8C8;
height: 60px;
display: flex;
justify-content: center;
align-item: center;
font-size:1rem;
postion: sticky;
z-index:10;

@media screen and (max-width:960px) {
    transition: 0.8s all ease;
}
`
export const NavContainer = styled.div`
display:flex;
justify-content: space-between;
height: 60px;
z-index: 1;
width: 100%;
padding:0 24px;
max-width:1100px;
`

export const NavLogo = styled(LinkR)`
color: #e94560;
dispay:flex;
justify-self: flex-start;
font-size: 1.5rem;
cursor: pointer;
font-weight: bold;
text-decoration: none;
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
    color: #000;
    &:hover {
        color: #FF45B5;
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
color: #000;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor:pointer;
&:hover {
    color: #FF45B5;
    transition: 0.2s ease-in-out;
};
&.active{
    border-bottom: 3px solid #fca3cc;
}
`