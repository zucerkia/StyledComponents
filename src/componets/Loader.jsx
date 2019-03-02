import React from 'react';
import styled, { keyframes } from 'styled-components';


const spin = keyframes`
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
`;

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 8em 0px;
`;

const Load = styled.div`
    border: 6px solid teal;
    border-top: 6px solid aquamarine;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    animation: ${spin} 1s cubic-bezier(0.53,-0.3, 0.44, 1.32) infinite;
`;

const Loader = () => (
    <Wrapper>
        <Load></Load>
    </Wrapper>
);

export default Loader;