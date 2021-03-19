import React, {useState} from "react";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavLinks,
  NavItem,
  NavMenu,
} from "./NavElements.js";
import {animateScroll as scroll} from 'react-scroll'
import { FaAlignJustify, FaAlignCenter } from "react-icons/fa";
import {RiHomeHeartLine} from 'react-icons/ri'


export default function Navigation({toggle}) {
  
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/" onClick={()=>scroll.scrollToTop()}>
          <RiHomeHeartLine/>
        </NavLogo>
        <MobileIcon onClick={toggle} onMouseEnter={onHover} onMouseLeave = {onHover}>
          { hover? <FaAlignJustify/> : <FaAlignCenter/> }
          </MobileIcon>
        <NavMenu>
            <NavItem>
                <NavLinks to='About' smooth={true} duration={1500}>
                    About
                </NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='MyStack' smooth={true} duration={1500}>
                    Stack
                </NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='Projects' smooth={true} duration={1500}>
                    Projects
                </NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='Contact' smooth={true} duration={1500}>
                    Contact
                </NavLinks>
            </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
}
