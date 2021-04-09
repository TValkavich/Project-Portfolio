import React from 'react'
import {Card} from 'react-bootstrap';
import styled from 'styled-components';

const AboutCardStyle = styled.div`

    .card {
        color: black;
        margin-top: 15%;
        padding: 10%;
        height: 60%;
        width: 60%;
        background: white;
        transition: width 0.5s;
        box-shadow: 2px 2px 5px rgba(0,0,0,0.5),
            5px 5px 15px rgba(0,0,0,0.1),
            -1px -1px 10px rgba(0,0,0,0.2);
    }

    .card:hover {
        color: white;
        text-decoration: none;
        underline: false;
        background: #1ebdd6;
        width: 90%;
        box-shadow: 2px 2px 5px rgba(0,0,0,0.5),
            10px 10px 15px rgba(0,0,0,0.5),
            -1px -1px 30px rgba(0,0,0,0.2);
    }

    a:hover {
        text-decoration: none;
      }

`;

export default function AboutCard() {
    return (
        <AboutCardStyle>
            <a href="/about">
                <Card>
                    <span>About</span>
                </Card>
            </a>
        </AboutCardStyle>
    )
}
