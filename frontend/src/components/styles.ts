import styled, { createGlobalStyle } from 'styled-components';

export const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    padding: 10%;
    box-sizing: border-box;
`;

export const GlobalStyles = createGlobalStyle`
    html, body, #root, .App {
        height: 100%;
        width: 100%;
        color: #424651;
    }
`;