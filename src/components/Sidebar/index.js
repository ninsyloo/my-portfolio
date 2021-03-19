import React from 'react';
import {SideContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements'


export default function Sidebar({isOpen, toggle}){
    return(
        <SideContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink smooth={true} duration={1500} to='About' onClick={toggle}>
                     About
                    </SidebarLink>
                    <SidebarLink smooth={true} duration={1500} to='MyStack' onClick={toggle}>
                     Stack
                    </SidebarLink>
                    <SidebarLink smooth={true} duration={1500} to='Projects' onClick={toggle}>
                      Projects
                    </SidebarLink>
                    <SidebarLink to='Contact' smooth={true} duration={1500} onClick={toggle}>
                     Contact
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SideContainer>
    )
}