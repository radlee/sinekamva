import React, { Component, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    DropdownToggle
} from 'reactstrap';

const Navigation = (props) => {
    
        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen);
  
        return (
            <div className="">

                <Navbar className="navigation" color="primary" dark extended="md">
                    <NavbarBrand href="/">Sinekamva Foundation Inc</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/about/">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/partners/">Partners</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Projects
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Project 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Project 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Manage Projects
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                        <NavbarText>Team</NavbarText>
                    </Collapse>
                </Navbar>     
            </div>
        )
    
}

export default withRouter(Navigation);