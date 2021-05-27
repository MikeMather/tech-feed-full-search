import styled from 'styled-components';

const Container = styled.div`
    border-radius: 4px;
    padding: 25px;
    border: 1px solid #e6ebec;
    margin: 30px 0;
    background-color: white;
    text-align: left;
`;

const Title = styled.h2`
    font-family: 'Cabin', sans-serif;
    margin-bottom: 5px;
`

const LinkContainer = styled.a`
    cursor: pointer;
    color: #424d54;
    text-decoration: none;

    &:hover {
        color: #BEDCFE;
    }
`;

const Subtitle = styled.p`
    color: #6290C3;
    font-size: 14px;
    margin: 0;
`;

const Description = styled.p`
    line-height: 1.4;
    margin-top: 25px;
`;

const Result = {
    Container,
    Title,
    Subtitle,
    Description,
    LinkContainer
}

export default Result;