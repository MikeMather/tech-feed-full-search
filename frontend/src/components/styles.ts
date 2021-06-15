import styled, { createGlobalStyle } from 'styled-components';

export const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    padding: 10%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export type ButtonProps = {
    color: 'grey' | 'orange';
};

export const Button = styled.button<ButtonProps>`
    border-radius: 4px;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    color: #424651;
    background-color: ${props => props.color === 'grey' ? '#f3f3f3' : '#ffbe79'};

    &:hover {
        background-color: ${props => props.color === 'grey' ? '#ececec' : '#ffa647'};
    }
`;

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;700&family=Raleway&display=swap');
    
    html, body, #root, .App {
        width: 100%;
        color: #424651;
        background-color: #f2f2f5;
        color: #424d54;
        font-family: 'Raleway', sans-serif;
        margin: 0;
    }
`;