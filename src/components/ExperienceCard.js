import React from 'react'
import {Card} from 'react-bootstrap';
import styled from 'styled-components';

const ExperienceCardStyle = styled.div`

    .card {
        color: #595959;
        margin-top: 15%;
        padding: 8%;
        height: 60%;
        width: 75%;
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
        box-shadow: 2px 2px 5p x rgba(0,0,0,0.5),
            10px 10px 15px rgba(0,0,0,0.5),
            -1px -1px 30px rgba(0,0,0,0.2);
    }

    a:hover {
        text-decoration: none;
    }

    .mainContent {
        font-size: 22px;
        font-weight: bold;
        font-family: Arial, serif;
    }

`;

function ExperienceCard() {
    return (
        <ExperienceCardStyle>
            <a href="/experience">
                <Card>
                    <p className="mainContent">I'm a Software Engineer</p> 
                        <br/>
                     See My Work Experience
                </Card>
            </a>
        </ExperienceCardStyle>
    )
}

export default ExperienceCard;
