import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    box-sizing: border-box;
    background-color: white;
    flex-wrap: wrap;
`;

export const HeaderActions = styled.div`
    padding: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
        margin-left: 15px;
    }
`