import React from 'react';
import styled from 'styled-components';
import H2Element from '../styled/h2Element';

// const skyBlueColor = 'skyBlue';
// const mainColor = 'peru';
// const HelloWorld = styled.h1`

//     text-align:center;
//     // color: ${skyBlueColor};
//     color:${props => props.color || mainColor}
// `;

const AboutStyle = styled.div`
    text-align:center;
`;
const AboutAvatar = styled.div`
    padding:2em 0 0 0;
`;
const AboutImage = styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;
    border: 2px solid #E91E63;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
`;
const About = () => (
    //si no le mando el color utiliza el color por defecto
    // <HelloWorld color={skyBlueColor}> 
    //     Hola mundo bonito
    // </HelloWorld>
    <AboutStyle>
        <AboutAvatar>
            <AboutImage src="https://picsum.photos/200/300/?random" alt="hola"/>
            <H2Element name="Julián Andrés Sucerquia"></H2Element>
        </AboutAvatar>
    </AboutStyle>

);
export default About;