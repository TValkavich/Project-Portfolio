import React from 'react';
import styled from 'styled-components';
import SadCat from './assests/sadCat.png';

const ImageStlye = styled.div`

    img {
        display: block;
        height: 300px;
        width: 300px;
        margin-top: 5%;
        margin-bottom: 5%;
        margin-left: auto;
        margin-right: auto;
    }

`;

const TextStyle = styled.div`

    h1 {
        color: #595959;
        text-align: center;
    }

    h4 {
        color: #595959;
        text-align: center;
    }

    p {
        color: #595959;
        text-align: center;
    }

`;

export default function NoMatch() {
    return (
        <React.Fragment>
            <ImageStlye>
                <img src={SadCat} alt="The saddest of cats" />
            </ImageStlye>
            <TextStyle>
                <h1>Uh Oh...</h1>
                <h4>404 - Page not found</h4>
                <p>Here's a sad kitty as a consolation prize</p>
            </TextStyle>
        </React.Fragment>
    )
}
