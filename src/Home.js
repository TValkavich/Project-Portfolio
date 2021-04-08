import React from 'react'
import Typewriter from 'typewriter-effect'
import styled from 'styled-components';

const TypewriterStyle = styled.div`
    color: #22e0f5;
    font-size: 70px;
    display: inline-flex;
    padding-top:10%
`;

export default function Home() {
    return (
        <React.Fragment>
            <TypewriterStyle>
                &gt;
                <Typewriter
                    options={{
                    strings: 'Tyler Valkavich',
                    autoStart: true,
                    loop: false,
                }}
                />
            </TypewriterStyle>
        </React.Fragment>
    )
}


