import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html,body {
        box-sizing: 0;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        height: 100%;
    }

    body {
        font-size: 10px;
    }

    p {
        padding: 0;
     margin:0;
    }

`;

export default GlobalStyle;