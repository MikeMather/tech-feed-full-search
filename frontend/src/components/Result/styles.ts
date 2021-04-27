import styled from 'styled-components';

export const ResultContainer = styled.div`
    border-radius: 4px;
    padding: 25px;
    border: 1px solid #e6ebec;
    margin: 30px 0;
    background-color: white;
    text-align: left;

    a {
        cursor: pointer;
        color: #424d54;
        font-family: 'Cabin', sans-serif;
        font-size: 32px;
        text-decoration: none;

        &:hover {
            color: #BEDCFE;
        }
    }

    p {
        line-height: 1.4;
    }
`;