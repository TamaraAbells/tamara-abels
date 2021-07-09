import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;  
        font-family: 'Philosopher', sans-serif;
    }

    :root {          
        --blue-color-1: #221160;
        --blue-color-2: #285AAE;
        --blue-color-3: #321F40;
        --yellow-color-1: #F58257;
        --yellow-color-2: #F58642;
        --yellow-color-3: #FEE05F;
        --yellow-color-4: #FFC367;
        --off-color: #0693A0;
        --off-color-1: #1A3E58;
        --dark-color: #2f2e41;
        --white-color: #ffffff;
    }

    body {
        overflow-x: hidden;
        font-family: 'Philosopher', sans-serif;
    }

    a {
        text-decoration: none;
    }
    
    input, button {
        outline: none;
        border: none;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active
    {
     -webkit-box-shadow: 0 0 0 30px var(--var(--white-color)-color) inset !important;
     box-shadow: 0 0 0 30px var(--var(--white-color)-color) inset !important;
    }

    button {
        cursor: pointer;
        outline: none;
    }

  .pointer {
    cursor: pointer;
  }


  .mobile {
    display: none;
    @media screen and (max-width: 789px) { 
        display: block;
    }
  }

  .web {
    display: block;
    @media screen and (max-width: 789px) { 
        display: none;
    }
  }




`;

export default GlobalStyles;
