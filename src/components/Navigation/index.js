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
import { FaAlignJustify, FaAlignCenter, FaDev } from "react-icons/fa";

export default function Navigation({toggle}) {
  
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <FaDev/>
        </NavLogo>
        <MobileIcon onClick={toggle} onMouseEnter={onHover} onMouseLeave = {onHover}>
          { hover? <FaAlignJustify/> : <FaAlignCenter/> }
          </MobileIcon>
        <NavMenu>
            <NavItem>
                <NavLinks to='about'>
                    About
                </NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='stack'>
                    Stack
                </NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='projects'>
                    Projects
                </NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='contact'>
                    Contact
                </NavLinks>
            </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
}
