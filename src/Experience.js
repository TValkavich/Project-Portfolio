import React from 'react'
import styled from 'styled-components';
import {Card} from 'react-bootstrap';
import SitusAmc from './assests/situsAMC_logo.jpg';


const MainHeaderStyle = styled.div`
    color: #595959;
    font-size: 70px;
    display: inline-flex;
    padding-top: 10%;
    padding-bottom: .5%;    
`;

const CardStyles = styled.div`

    .card {
        padding: 20px;
        margin-bottom: 10%;
    }

    img {
        margin: 3%;
        width: 50%;
        float: left;
        height: 200px;
        width: 200px;
    }

    p {
        margin: 3%;
        width: 50%;
        float: left;
        color: red;
    }

`;

function Experience() {
    return (
        <React.Fragment>
            <MainHeaderStyle>
                Work Experience
            </MainHeaderStyle>
            <hr style={{borderTop: "3px solid #bbb", paddingBottom: "10%"}}/>
            <CardStyles>
                <Card>
                    <div class="wrapper" >
                    <img src={SitusAmc} />
                    <p>sssssss ssssssssssddddddddd ddddddddddddddd ddddddddddddddd ddddddddddd dddddddddddddddd ddddddddddddddd dddddd ddddddddddddddddd ddddddddddd dddddddddd ddddddd ddddddd dddddddds ssss</p>
                    </div>
                </Card>
            </CardStyles>
        </React.Fragment>
    )
}

export default Experience;
