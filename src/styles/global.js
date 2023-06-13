import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-primary: #27AE60;
        --color-secondary: #EB5757;
        --grey-600: #333333;
        --grey-300: #828282;
        --grey-100: #E0E0E0;
        --grey-0: #F5F5F5;
        --negative: #E60000;
        --warning: #FFCD07;
        --success: #168821;
        --information: #155BCB;
        --font-family: 'Inter', sans-serif;
    }
    h1 {
        font-weight: 700;
        font-size: 26px;
        line-height: 34px;
        color: black;
    }
    h2 {
        font-weight: 700;
        font-size: 22px;
        line-height: 24px;
        color: black;
    }
    h3 {
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: black;
    }
    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color:var(--grey-300);
    }

    body{
        font-family:var(--font-family);

        background-color:white;
        
        display:flex;
        flex-direction: column;
        justify-content: center;
    }
  
`
