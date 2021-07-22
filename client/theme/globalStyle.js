import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html,body {
        box-sizing: 0;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        height: 100%;
        overflow-y: hidden;
    }

    body {
        font-size: 10px;
    }

    p {
        padding: 0;
     margin:0;
     color: white;
    }

    .PlayerRSWP {
        background-color: #191414 !important;
        min-height: 6.5rem !important;
    }

    .rswp__toggle {
        color: white !important;
    }

    .__nnvdcq p:first-child {
        color:white !important;
    }
    
    ._SliderRSWP {
        span {
            background-color:#1cd05f !important;
        }
    }
   

`;

export default GlobalStyle;