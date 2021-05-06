import React from 'react'
import styled from 'styled-components';
import {Card} from 'react-bootstrap';
import SitusAmc from './assests/situsAMC_logo.jpg';
import MBMS from './assests/mbms_logo.png';
import Ringer from './assests/ringer.png'


const MainHeaderStyle = styled.div`
    color: #595959;
    font-size: 70px;
    display: inline-flex;
    padding-top: 10%;
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
            <MainHeaderStyle>
                Work Experience
            </MainHeaderStyle>
            <hr style={{borderTop: "3px solid #bbb", paddingBottom: "15%"}}/>
            <CardStyles>
                <Card>
                    <div class="wrapper" >
                        <h4>SitusAMC - Software Developer</h4>
                        <img src={SitusAmc} alt="SitusAMC Logo"/>
                        <p style={{fontWeight: 'bold'}}>December 2020 - Present</p>
                        <p style={{color: '#595959'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt neque ac maximus fermentum. Maecenas justo lectus, mollis quis cursus sit amet, ultrices eu ante. Duis non ultrices nisl, sed consectetur lacus. Fusce auctor sapien non ligula iaculis, vel posuere nisl suscipit. Maecenas ornare accumsan mi, a aliquet orci tempus eget. Aenean luctus ultricies quam sed imperdiet. Suspendisse venenatis sapien mauris, vel mattis ipsum vehicula vitae. Mauris ultrices posuere porta. Sed vitae tortor cursus, aliquam risus vel, eleifend diam. Aliquam maximus elit ut risus dapibus fringilla.
                        </p>
                    </div>
                </Card>
                <Card>
                    <div class="wrapper" >
                        <h4>MBMS - Software Developer Intern</h4>
                        <img src={MBMS} alt="MBMS Logo"/>
                        <p style={{fontWeight: 'bold'}}>August 2019 - December 2020</p>
                        <p style={{color: '#595959'}}> 
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
                        <p style={{color: '#595959'}}> This was my job all through college up until I began my career as a Software Engineer. I gained practical, hands on experience with the art of carpentry. I worked through many of the stages of the residential home building process including: framing, flooring, plumbing, electric, decking, siding, finish-work and of course demolition. My knowledge gained throughout the course of my employment at Ringer Construction manifested to me running my own crew of beginners to take on demolition and flooring projects. 
                        </p>
                    </div>
                </Card>
            </CardStyles>
        </React.Fragment>
    )
}

export default Experience;
