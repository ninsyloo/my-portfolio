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
                    <SidebarLink to='about' onClick={toggle}>
                     About
                    </SidebarLink>
                    <SidebarLink to='stack' onClick={toggle}>
                     Stack
                    </SidebarLink>
                    <SidebarLink to='projects' onClick={toggle}>
                      Projects
                    </SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>
                     Contact
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SideContainer>
    )
}