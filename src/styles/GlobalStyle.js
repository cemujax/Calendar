import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        font-family: 'Nanum Gothic', sans-serif;
    }
`;

export default GlobalStyle;
