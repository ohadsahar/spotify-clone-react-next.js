import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html,body {
        box-sizing: 0;
        margin: 0;
        padding: 0;
        font-family: 'Rubik', sans-serif;
        height: 100vh;
        overflow-y: hidden;
    }

    body {
          font-family: 'Rubik', sans-serif;
        font-size: 10px;

    }

    p {
        padding: 0;
     margin:0;
     color: white;
    }

    .PlayerRSWP {
        background-color: #191414 !important;
        /* min-height: 6.5rem !important; */
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

    .__1d63smy > button {
        color: white !important;
    }

    .__1k6b4a3 > button {
        color: white !important;
    }

    .__j3ulwq >button {
        color: white !important;
    }
   

`;

export default GlobalStyle;