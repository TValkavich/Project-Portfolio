import React from 'react';
import Typewriter from 'typewriter-effect';
import styled from 'styled-components';
import ExperienceCard from "./components/ExperienceCard";
import PortfolioCard from "./components/PortfolioCard";
import ContactCard from './components/ContactCard';
import Experience from './Experience';
import Portfolio from './Portfolio';
import Contact from './Contact';

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

function Home() {
    return (
        <React.Fragment>
            <TypewriterStyle id="home">
                &gt;
                <Typewriter
                    options={{
                    strings: 'Tyler Valkavich',
                    autoStart: true,
                    loop: false,
                }}
                />
            </TypewriterStyle>
            <WelcomeMessage>
                <p>Welcome to my corner of the internet.</p>
            </WelcomeMessage>
            <ExperienceCard />
            <PortfolioCard />
            <ContactCard />
            <Experience />
            <Portfolio />
            <Contact />
        </React.Fragment>
    )
}

export default Home;

