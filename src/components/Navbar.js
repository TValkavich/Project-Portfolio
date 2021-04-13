import React from 'react';
import {Button, Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const NavStyles = styled.div`
    .nav {
        padding: .5%;
        background-color: #F5F5F5;
    }

    .navbar-item, .nav-link {
        color: #525252;
    }

    .nav-link:hover {
        color: #22e0f5;
    }

`;


export default function NavigationBar() {
    return (
        <NavStyles>
            <Nav className="justify-content-center">
                <Button variant="outline-info" href="/" style={{margin: '5px' }}>Home</Button>
                <Button variant="outline-info" href="/experience" style={{margin: "5px"}}>Experience</Button>
                <Button variant="outline-info" href="/portfolio" style={{margin: "5px"}}>Projects</Button>
                <Button variant="outline-info" href="/contact" style={{margin: '5px' }}>Contact</Button>
                <Button variant="outline-info" href="/about" style={{margin: '5px' }}>About</Button>
            </Nav>
        </NavStyles>
    )
}