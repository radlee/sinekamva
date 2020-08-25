import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
} from 'reactstrap';

const Navigation = (props) => {
    
        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen);
  
        return (
            <div className="">

                <Navbar className="navigation" dark extended="md">
                    <NavbarBrand href="/">ORIGIN2020</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                        <NavItem>
                                <NavLink href="/about/">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/about/">Objectives</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/partners/">Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/partners/">Organizations</NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText>Get In Touch</NavbarText>
                    </Collapse>
                </Navbar>     
            </div>
        )
    
}

export default withRouter(Navigation);