import React from 'react';
import styled from 'styled-components';
import {Card} from 'react-bootstrap';

const MainHeaderStyle = styled.div`
    color: #595959;
    font-size: 70px;
    display: inline-flex;
    padding-top: 10%;
    padding-bottom: .5%;    
`;

function Portfolio() {
    return (
        <React.Fragment>
            <MainHeaderStyle>
                Projects
            </MainHeaderStyle>
            <hr style={{borderTop: "3px solid #bbb", paddingBottom: "15%"}}/>
        </React.Fragment>
    )
}

export default Portfolio;
