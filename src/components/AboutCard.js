import React from 'react'
import {Card} from 'react-bootstrap';
import styled from 'styled-components';

const AboutCardStyle = styled.div`

    .card {
        color: #595959;
        margin-top: 10%;
        margin-bottom: 100px;
        margin-left: 80%;
        padding: 8%;
        height: 60%;
        width: 75%;
        background: white;
        transition: width 0.5s;
        box-shadow: 2px 2px 5px rgba(0,0,0,0.5),
            5px 5px 15px rgba(0,0,0,0.1),
            -1px -1px 10px rgba(0,0,0,0.2);
        float: right;
        text-align: right;
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

    .span {
        display: block;
        float: right;
        text-align: right;
    }

    .mainContent {
        font-size: 22px;
        font-weight: bold;
        font-family: Arial, serif;
    }

`;

export default function AboutCard() {
    return (
        <AboutCardStyle>
            <a href="/about">
                <Card>
                    <p className="mainContent">About Me</p> 
                        <br/>
                    Learn a Thing or Two About Me
                </Card>
            </a>
        </AboutCardStyle>
    )
}
