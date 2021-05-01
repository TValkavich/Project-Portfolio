import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const MainHeaderStyle = styled.div`
    color: #595959;
    font-size: 70px;
    display: inline-flex;
    padding-top: 10%;
    padding-bottom: .5%;    
`;

const ButtonStyle = styled.div`

.btn {
    display: inline-block;
    text-decoration: none;
    color: #bbb;
    width: 180px;
    height: 180px;
    line-height: 100px;
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;
    overflow: hidden;
    background-image: -webkit-linear-gradient(45deg, #ffffff 0%, #ffffff 100%);    
    background-image: linear-gradient(45deg, #ffffff 0%, #ffffff 100%);
    transition: .5s;
    border: solid 4px #bbb;
    padding-top 25px;
    text-align:
}

.btn:hover{
  -webkit-transform: rotate(10deg);
  -ms-transform: rotate(10deg);
  transform: rotate(10deg);
  background: #1ebdd6;
  color: white;
  border: solid 4px #fff;
}

.buttonWrapper {
    width: 180px;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 10%;
}

.buttonWrapper .btn .emailIcon {
    font-size: 80px;
    padding-top: 6px;
    padding-left: 2px;
}

.buttonWrapper .btn .linkedinIcon {
    font-size: 80px;
    padding-top: 0px;
    padding-left: 5px;
}

.buttonWrapper .btn .githubIcon {
    font-size: 80px;
    padding-top: 0px;
    padding-left: 5px;
}

.buttonWrapper p {
    display: block;
    margin: 0 auto;
    text-align: center;
    padding-top: 10%;
}

.buttonWrapper .buttonHeader {
    color: #1ebdd6;
}

.buttonWrapper .buttonContent {
    color: #595959;
    margin-top: -15px;
}

.buttonWrapper .buttonLineBreak{
    width: 40%;
    border-top: 3px solid #bbb;
}

.superWrapper {
    display: flex;
    justify-content: center;
}

`;

export default function Contact() {
    return (
        <React.Fragment>
            <MainHeaderStyle>
                Contact Me
            </MainHeaderStyle>
            <hr style={{borderTop: "3px solid #bbb", paddingBottom: "15%"}}/>
            <ButtonStyle>
                <div class="superWrapper">
                    <div class="buttonWrapper">
                        <a target="_blank" rel="noopener noreferrer" href="mailto: tylervalkavich@gmail.com" class="btn">
                            <div class="emailIcon">
                                <FontAwesomeIcon icon={faEnvelopeOpenText} />
                            </div>
                        </a>
                        <p class="buttonHeader">Email</p>
                        <hr class="buttonLineBreak" />
                        <p class="buttonContent">tylervalkavich@gmail.com</p>
                    </div>
                    <div class="buttonWrapper">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tyler-valkavich-a95238184/" class="btn">
                            <div class="linkedinIcon">
                                <FaLinkedin />
                            </div>
                        </a>
                        <p class="buttonHeader">LinkedIn</p>
                        <hr class="buttonLineBreak" />
                        <p class="buttonContent">Tyler Valkavich</p>
                    </div><div class="buttonWrapper">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/TValkavich" class="btn">
                            <div class="githubIcon">
                                <FaGithub/>
                            </div>
                        </a>
                        <p class="buttonHeader">GitHub</p>
                        <hr class="buttonLineBreak" />
                        <p class="buttonContent">TValkavich</p>
                    </div>
                </div>
            </ButtonStyle>
        </React.Fragment>
    )
}
