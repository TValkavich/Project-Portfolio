import React from 'react'
import Typewriter from 'typewriter-effect'
import styled from 'styled-components';

const TypewriterStyle = styled.div`
    color: #1ebdd6;
    font-size: 70px;
    display: inline-flex;
    padding-top:10%;
    padding-bottom:4%;
`;

const WelcomeMessage = styled.div`
    font-size: 20px;
    color: #595959;
`;

export default function Home() {
    return (
        <React.Fragment>
            <TypewriterStyle>
                &gt;
                <Typewriter
                    options={{
                    strings: 'Tyler Valkavich.',
                    autoStart: true,
                    loop: false,
                }}
                />
            </TypewriterStyle>
            <WelcomeMessage>
                <p>Welcome to my corner of the internet.</p>
            </WelcomeMessage>
        </React.Fragment>
    )
}


