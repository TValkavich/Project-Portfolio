import React from 'react';
import styled from 'styled-components';

const MainHeaderStyle = styled.div`
    color: #595959;
    font-size: 70px;
    display: inline-flex;
    padding-top: 10%;
    padding-bottom: .5%;    
`;

export default function About() {
    return (
        <React.Fragment>
            <MainHeaderStyle>
                About Me
            </MainHeaderStyle>
            <hr style={{borderTop: "3px solid #bbb", paddingBottom: "15%"}}/>

        </React.Fragment>
    )
}
