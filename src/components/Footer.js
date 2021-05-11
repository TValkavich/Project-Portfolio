import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-scroll';


const FooterStyle = styled.div`

.wrapper .button{
    display: inline-block;
    height: 60px;
    width: 60px;
    float: none;
    margin: 0 5px;
    overflow: hidden;
    background: #fff;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
    transition: all 0.3s ease-out;
  }

  .wrapper .button:hover{
    width: 200px;
  }

  .wrapper .button .icon{
    display: inline-block;
    height: 60px;
    width: 60px;
    text-align: center;
    border-radius: 50px;
    box-sizing: border-box;
    line-height: 63px;
    transition: all 0.3s ease-out;
  }

  .wrapper .button:nth-child(1):hover .icon{
    background: #1ebdd6;
  }
  .wrapper .button:nth-child(2):hover .icon{
    background: #1ebdd6;
  }

  .wrapper .button:nth-child(3):hover .icon{
    background: #1ebdd6;
  }

  .wrapper .button:nth-child(4):hover .icon{
    background: #1ebdd6;
  }

  .wrapper .button:nth-child(5):hover .icon{
    background: #1ebdd6;
  }

  .wrapper .button .icon i{
    font-size: 25px;
    line-height: 60px;
    transition: all 0.3s ease-out;
  }

  .wrapper .button:hover .icon i{
    color: coral;
    text-decoration: none;

  }

  .wrapper .button span{
    font-size: 20px;
    font-weight: 500;
    line-height: 60px;
    margin-left: 10px;
    transition: all 0.3s ease-out;
  }

  .wrapper .button:nth-child(1) span{
    color: #1ebdd6;
  }

  .wrapper .button:nth-child(2) span{
    color: #1ebdd6;
  }

  .wrapper .button:nth-child(3) span{
    color: #1ebdd6;
  }

  .wrapper .button:nth-child(4) span{
    color: #1ebdd6;
  }

  .wrapper .button:nth-child(5) span{
    color: #1ebdd6;
  }

  .wrapper {
      display: flex;
      padding: 100px;
      margin-bottom: -70px;
      justify-content: center;
      background-color: #F5F5F5;
    }

    .subtext {
      font-size: 14px;
      text-align: center;
      background-color: #F5F5F5;
    }

`;

function Footer() {
    return (
        <div class="superWrapper">
            <FooterStyle>
                <div class="wrapper">
                    <Link to="home" spy={true} smooth={true}>   
                      <div class="button" style={{color: 'black', textDecoration: 'none'}} >
                        <div class="icon"><FontAwesomeIcon icon={faHome} /></div>
                        <span>Home</span>
                      </div>
                    </Link>
                    <Link to="experience" spy={true} smooth={true}>    
                      <div class="button" style={{color: 'black', textDecoration: 'none'}} >   
                        <div class="icon"><FontAwesomeIcon icon={faBriefcase} /></div>
                        <span>Experience</span> 
                      </div>
                    </Link>
                    <Link to="projects" spy={true} smooth={true}>  
                      <div class="button" style={{color: 'black', textDecoration: 'none'}} >   
                        <div class="icon"><FontAwesomeIcon icon={faFolder} /></div>
                        <span>Projects</span>
                      </div>
                    </Link>
                    <Link to="contact" spy={true} smooth={true}>  
                      <div class="button" style={{color: 'black', textDecoration: 'none'}} >   
                        <div class="icon"><FontAwesomeIcon icon={faPhone} /></div>
                        <span>Contact</span>
                      </div>
                    </Link>
                </div>
                <div class="subtext">Made by Tyler Valkavich &copy; 2021</div>
            </FooterStyle>
        </div>
    )
}

export default Footer;