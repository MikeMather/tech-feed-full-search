import React from 'react';
import { ResultType } from '../../types';
import Res from './styles';

const Result = ({ result }: { result: ResultType }) => {

    const imgUrl = `img/${result.feed__name.split(' ').join('').toLowerCase()}.png`;

    return (
        <Res.LinkContainer href={result.url} target="_blank">
            <Res.Container>
                <img alt={`${result.feed__name} logo`} src={imgUrl} width={60} />
                <Res.Title>{result.title}</Res.Title>
                <Res.Subtitle>{result.feed__name}</Res.Subtitle>
                <Res.Description dangerouslySetInnerHTML={{ __html: result.description }}></Res.Description>
            </Res.Container>
        </Res.LinkContainer>
    )
};

export default Result;