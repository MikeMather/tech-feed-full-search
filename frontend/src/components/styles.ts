import styled, { createGlobalStyle } from 'styled-components';

export const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    padding: 10%;
    box-sizing: border-box;
`;

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;700&family=Raleway&display=swap');
    
    html, body, #root, .App {
        height: 100%;
        width: 100%;
        color: #424651;
        background-color: #f2f2f5;
        color: #424d54;
        font-family: 'Raleway', sans-serif;
    }
`;