import React from 'react'
import styled from 'styled-components';
import {Card, ListGroup} from 'react-bootstrap';
import SitusAmc from './assests/situsAMC_logo.jpg';
import MBMS from './assests/mbms_logo.png';
import Ringer from './assests/ringer.png'


const MainHeaderStyle = styled.div`
    color: #595959;
    font-size: 70px;
    display: inline-flex;
    padding-top: 2%;
    padding-bottom: .5%;    
`;

const SecondaryHeaderStyle = styled.div`
    color: #595959;
    text-align: center;
    font-size: 26px;
`;

const CardStyles = styled.div`

    .card {
        padding: 20px;
        margin-bottom: 10%;
        box-shadow: 2px 2px 5px rgba(0,0,0,0.5),
            5px 5px 15px rgba(0,0,0,0.1),
            -1px -1px 10px rgba(0,0,0,0.2);
    }

    img {
        margin: 3% 5% 3% 3%;
        width: 50%;
        float: left;
        height: 200px;
        width: 200px;
    }

    p {
        padding: 3% 3% -3% 3%;
        width: 100%;
    }

    h4 {
        padding-top: 2%;
        display: inline-block;
    }

`;

function Experience() {
    return (
        <React.Fragment>
            <MainHeaderStyle id="experience">
                Work Experience
            </MainHeaderStyle>
            <hr style={{borderTop: "3px solid #bbb", paddingBottom: "15%"}}/>
            <CardStyles>
                <Card>
                    <div class="wrapper">
                        <h4>SitusAMC - Software Developer</h4>
                        <img src={SitusAmc} alt="SitusAMC Logo"/>
                        <p style={{fontWeight: 'bold'}}>December 2020 - Present</p>
                        <p style={{color: '#595959'}}>
                            SitusAMC gave me insight into the true world of software development. They allowed me to further grow my skill set through working closely with great developers to build great products for the real estate finance industry. Some of my responsibilities and impact include:
                            <ListGroup variant="flush" style={{margin: '10% 0 2% 0', color: '#595959'}}>
                                    <ListGroup.Item>Used various programming languages and frameworks including but not limited to .NET, .NET Core, C#, JavaScript, T-SQL, AWS, and Azure</ListGroup.Item>
                                    <ListGroup.Item>Participated in Agile software development methodologies including daily standups and sprint planning</ListGroup.Item>
                                    <ListGroup.Item>Designed, developed and delivered both front-end and back-end solutions</ListGroup.Item>
                                    <ListGroup.Item>Wrote technical specifications based on conceptual design and stated business requirements</ListGroup.Item>
                                    <ListGroup.Item>Identified and evaluated new technologies for implementation within our front-end infastructure</ListGroup.Item>
                                </ListGroup>
                        </p>
                    </div>
                </Card>
                <Card>
                    <div class="wrapper" >
                        <h4>MBMS - Software Developer Intern</h4>
                        <img src={MBMS} alt="MBMS Logo"/>
                        <p style={{fontWeight: 'bold'}}>August 2019 - December 2020</p>
                        <p style={{color: '#595959'}}>
                            The beginning of my career. Here at MBMS, Inc, I was introduced to modern day software development practices and began to grow and build upon my skill set through gaining hands on experience while still remaining a student in school. A brief overview of my responsibilites and impact include:
                            <ListGroup variant="flush" style={{margin: '10% 0 2% 0', color: '#595959'}}>
                                <ListGroup.Item>Used Microsoft .NET Framework and supporting programming languages (i.e. Visual C#, JavaScript, T-SQL)</ListGroup.Item>
                                <ListGroup.Item>Designed and deployed internal tooling for the company to auto-generate templates for our backend SQL files thereby streamlining the process of file creation as well as providing a basis for SQL coding standards</ListGroup.Item>
                                <ListGroup.Item>Worked alongside our QA team to test, detect and eliminate any bugs or defects within our existing applications</ListGroup.Item>
                                <ListGroup.Item>Worked within the defined Software Development Life Cycle process, coding standards and best practices of the company</ListGroup.Item>
                                <ListGroup.Item>Supported, maintained, and documented software functionality.</ListGroup.Item>
                                <ListGroup.Item>Understood and adhered to the company's risk and regulatory standards, policies and controls in accordance with the company's risk tolerance</ListGroup.Item>
                                <ListGroup.Item>Served as technical expert on development projects, participated in full development life cycle including requirements analysis and design</ListGroup.Item>
                            </ListGroup>
                        </p>
                    </div>
                </Card>
            </CardStyles>
            <SecondaryHeaderStyle>
                Pre-Software Engineering Experience
                <hr style={{borderTop: "3px solid #bbb", paddingBottom: "10%", width: '50%'}}/>
            </SecondaryHeaderStyle>
            <CardStyles>
                <Card>
                    <div class="wrapper" >
                        <h4>Ringer Construction - Carpenter</h4>
                        <img src={Ringer} alt="Ringer Construction Logo"/>
                        <p style={{fontWeight: 'bold'}}>December 2016 - August 2019</p>
                        <p style={{color: '#595959'}}>
                            This was my job all through college up until I began my career as a Software Engineer. I gained practical, hands on experience with the art of carpentry. I worked through many of the stages of the residential home building process including: 
                            <ListGroup variant="flush" style={{margin: '10% 0 2% 0', color: '#595959'}}>
                                <ListGroup.Item>Framing - Worked alongside the framing crew on new construction projects or to add extensions onto homes</ListGroup.Item>
                                <ListGroup.Item>Flooring - Performed numerous small jobs to install vinyl, laminate, tile and hardwood flooring</ListGroup.Item>
                                <ListGroup.Item>Plumbing - Worked with the plumbing crew on both new and existing plumbing jobs </ListGroup.Item>
                                <ListGroup.Item>Electric - Short stint with the electric team to install new ceiling lights in a commercial warehouse</ListGroup.Item>
                                <ListGroup.Item>Decking - Spent a summer with the decking crew building brand new decks for clients or repairing older ones</ListGroup.Item>
                                <ListGroup.Item>Siding - Installed both cedar shake and vinyl siding on numerous homes</ListGroup.Item>
                                <ListGroup.Item>Finish Work - Learned trim work and installed floor, ceiling and door moldings in numerous homes </ListGroup.Item>
                                <ListGroup.Item>Demolition - Destroyed and removed any pre-existing construction that was to be renovated</ListGroup.Item>
                            </ListGroup>
                        My knowledge gained throughout the course of my employment at Ringer Construction manifested to me running my own crew of novice carpenters to take on demolition and flooring projects. 
                        </p>
                    </div>
                </Card>
            </CardStyles>
        </React.Fragment>
    )
}

export default Experience;
