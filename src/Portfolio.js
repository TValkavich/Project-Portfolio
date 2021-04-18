import React from 'react';
import styled from 'styled-components';
import {Card, Button} from 'react-bootstrap';
import SitusAMC from './assests/situsAMC_greyScale.jpg';
import {FaGithub} from 'react-icons/fa';

const MainHeaderStyle = styled.div`
    color: #595959;
    font-size: 70px;
    display: inline-flex;
    padding-top: 10%;
    padding-bottom: .5%;    
`;

const CardStyle = styled.div`

    .card {
        margin-bottom: 10%;
        box-shadow: 2px 2px 5px rgba(0,0,0,0),
            5px 5px 15px rgba(0,0,0,0.1),
            -1px -1px 10px rgba(0,0,0,0.2);
    }

    .card-title {
        color: black;
        font-size: 24px;
        font-weight: bold;
        margin: 2% 0% 0% 2%;
    }

    .card-text {
        margin: 2% 0% .5% 2%;
        color: #595959;
    }

    .card img {
        height: 75px;
        width: 100%;
    }

    .card button {
        width: 150px;
        margin: 2%;
    }

    .card button FaGithub {
        margin-right: 10px;
    }

    .languagesWrapper {
        margin: 20px 20px 0px 20px;
        display: flex;
    }

    .languagesWrapper p {
        margin-right: 15px;
        border-style: solid;
        border-radius: 10%;
        padding: 5px;
        border-color: #fffb8a;
        color: #595959;
        font-size: 12px;
    }

`;

function Portfolio() {
    return (
        <React.Fragment>
            <MainHeaderStyle>
                Projects
            </MainHeaderStyle>
            <hr style={{borderTop: "3px solid #bbb", paddingBottom: "15%"}}/>
            <CardStyle>
                <Card>
                    <Card.Img variant="top" src={SitusAMC}/>
                    <Card.Title >Portfolio Site</Card.Title>
                    <Card.Text>Some quick example text to build on the card title and make up the bulk of
                        the card's content. Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <div class="languagesWrapper">
                        <p>HTML5</p>
                        <p>CSS3</p>
                        <p>JavaScript</p>
                        <p>ReactJS</p>
                        <p>React Bootstrap</p>
                        <p>React Router</p>
                        <p>Styled-Components</p>
                    </div>
                    <Button variant="info">
                        <FaGithub />
                        View Source
                    </Button>
                </Card>
                <Card>
                    <Card.Img variant="top" src={SitusAMC}/>
                    <Card.Title >that shit on my laptop</Card.Title>
                    <Card.Text>Some quick example text to build on the card title and make up the bulk of
                        the card's content. Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <div class="languagesWrapper">
                        <p>HTML5</p>
                        <p>CSS3</p>
                        <p>JavaScript</p>
                        <p>ReactJS</p>
                        <p>React Bootstrap</p>
                        <p>React Router</p>
                        <p>Styled-Components</p>
                    </div>
                    <Button variant="info">
                        <FaGithub />
                        View Source
                    </Button>
                </Card>
            </CardStyle>
        </React.Fragment>
    )
}

export default Portfolio;
