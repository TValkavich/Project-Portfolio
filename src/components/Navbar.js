import React from 'react';
import {Button, Nav} from 'react-bootstrap';
import styled from 'styled-components';
import Resume from '../assests/TylerValkavich_Resume.pdf';
import {Link} from 'react-scroll';

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
                <Button variant="outline-info" style={{margin: '5px' }}><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></Button>
                <Button variant="outline-info" style={{margin: "5px"}}><Link to="experience" spy={true} smooth={true}>Experience</Link></Button>
                <Button variant="outline-info" style={{margin: "5px"}}><Link to="projects" spy={true} smooth={true}>Projects</Link></Button>
                <Button variant="outline-info" style={{margin: '5px' }}><Link to="contact" spy={true} smooth={true}>Contact</Link></Button>
                <Button variant="outline-secondary" href={Resume} target="_blank" rel="noopener noreferrer" style={{margin: '5px' }}>Resume</Button>
                <Button variant="outline-secondary" target="_blank" rel="noopener noreferrer" href="https://github.com/TValkavich" style={{margin: '5px' }}>GitHub</Button>
            </Nav>
        </NavStyles>
    )
}