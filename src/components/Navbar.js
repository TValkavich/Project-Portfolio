import React from 'react';
import {Button, Nav} from 'react-bootstrap';
import styled from 'styled-components';
import Resume from '../assests/TylerValkavich_Resume.pdf';

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
                <Button variant="outline-info" href="/Project-Portfolio/" style={{margin: '5px' }}>Home</Button>
                <Button variant="outline-info" href="/Project-Portfolio/experience" style={{margin: "5px"}}>Experience</Button>
                <Button variant="outline-info" href="/Project-Portfolio/portfolio" style={{margin: "5px"}}>Projects</Button>
                <Button variant="outline-info" href="/Project-Portfolio/contact" style={{margin: '5px' }}>Contact</Button>
                <Button variant="outline-secondary" href={Resume} target="_blank" rel="noopener noreferrer" style={{margin: '5px' }}>Resume</Button>
                <Button variant="outline-secondary" target="_blank" rel="noopener noreferrer" href="https://github.com/TValkavich" style={{margin: '5px' }}>GitHub</Button>
            </Nav>
        </NavStyles>
    )
}