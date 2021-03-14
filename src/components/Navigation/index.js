import React from "react";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavLinks,
  NavItem,
  NavMenu,
} from "./NavElements.js";
import portfolio from "../../assets/portfolio.png";
import { FaBars } from "react-icons/fa";

export default function Navigation({toggle}) {
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <img src={portfolio} style={{ height: "70px", width: "70px" }} />
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars/>
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
