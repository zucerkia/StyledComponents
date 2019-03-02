import React from 'react';
import { createGlobalStyle } from 'styled-components';
import About from '../componets/About';
import Loader from '../componets/Loader';


const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Lato:300,400|Roboto:300,400,500');
`;

const App = () => (
    <>
        <GlobalStyle></GlobalStyle>
        <About></About>
        <Loader></Loader>
    </>
);

export default App;