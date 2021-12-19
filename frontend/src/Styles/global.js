import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body {
        font-family: Roboto, sans-serif;
        width: 100vw;
        height: 100vh;
        background: #0E0E0E;
        color: #FFFFFF;
    }

`;
