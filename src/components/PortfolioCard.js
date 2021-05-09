import React from 'react'
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const ContactCardStyle = styled.div`

    .card {
        color: #595959;
        margin-top: 10%;
        margin-bottom: 10%;
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
        background: #1ebdd6;
        width: 90%;
        box-shadow: 2px 2px 5px rgba(0,0,0,0.5),
            10px 10px 15px rgba(0,0,0,0.5),
            -1px -1px 30px rgba(0,0,0,0.2);
    }

    .mainContent {
        font-size: 22px;
        font-weight: bold;
        font-family: Arial, serif;
    }

`;

function PortfolioCard() {
    return (
        <ContactCardStyle>
            <a href="/Project-Portfolio/portfolio">
                <Card>
                    <p className="mainContent">I Love Programming</p> 
                        <br/>
                    See My Side-Projects
                </Card>
            </a>
        </ContactCardStyle>            
    )
}

export default PortfolioCard;
