import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }

  body {
    align-items: center;
    margin: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: all 2s !important;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .text-bold{
    font-weight: bold;
  }

  .App {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.25s linear;
  overflow-x: hidden;
  position: relative;
  }

  .head-container{
    background-color: ${({ theme }) => theme.bgColor} !important;
    color: ${({ theme }) => theme.textColorInverse} !important
  }
  .head-link{
   
  }

  .head-link:hover {
    color: ${({ theme }) => theme.linkColor} !important
  }

  .wrapper_contact {
  background-image: url("https://www3.assets.heroku.com/assets/home/heroku-is-for-bg-44f6c029946d5cb6d1c7f62360495a078a6e6b42acf3b1428d7cc08573c8b13b.png");
  background-repeat: no-repeat;
  background-size: 1550px;
  background-position:  center 210px ;
  }
  
  .hi, .name, .title-description  {
    background:  ${({ theme }) => theme.bgtext};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .hero > p {
    border-color : ${({ theme }) => theme.borderColor};
  }

  .profil {
    background: ${({ theme }) => theme.bgColorGrad} ;
  }
;
  .skills > li{
    border-color: ${({ theme }) => theme.bgColorOp} ;
    background-color: ${({ theme }) => theme.bgColorOp};
  }

  input:focus,
  textarea:focus {
    border-color : ${({ theme }) => theme.btnBgColor} !important;
  }


  button {
    background-color: ${({ theme }) => theme.btnBgColor} !important;
  }

  button:hover {
    background-color: ${({ theme }) => theme.btnBgColorOp} !important;
  }

  .copyright {
    font-size: 13px;
    color:  ${({ theme }) => theme.footerText};

  }

  .repo {
    border:  ${({ theme }) => theme.repoBorder};
    background-color:  ${({ theme }) => theme.repoBg};
    color: ${({ theme }) => theme.text}
  }
  `;
