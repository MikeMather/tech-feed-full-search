import styled from 'styled-components';

interface SearchProps {
    hasValue: boolean;
};

export const SearchContainer = styled.div<SearchProps>`
    width: 80%;
    position: absolute;
    top: ${props => props.hasValue ? '10%' : '50%'};
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 1s cubic-bezier(0.22, 0.61, 0.36, 1);
    display: flex;
    justify-content: center;
    max-width: 600px;

    input {
        width: 90%;
        border: none;
        padding: 20px;
        box-shadow: ${props => props.hasValue ? '3px 3px 16px hsl(0deg 0% 0% / 20%)' : '10px 10px 55px hsl(0deg 0% 0% / 20%)'};
        border-radius: 4px;
        font-size: 18px;

        &:focus {
            outline: none;
        }
    }
`

export const ResultsContainer = styled.div`
    margin: 50px auto;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SearchForm = styled.form`
    position: relative;
    width: 80%;

    > button {
        position: absolute;
        right: 10%;
        top: 50%;
        transform: translate(50%, -50%);
    }
`;

export const SearchButton = styled.button`
    border-radius: 4px;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    background-color: #f3f3f3;

    &:hover {
        background-color: #ececec;
    }
`;