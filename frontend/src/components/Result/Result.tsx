import React from 'react';
import { ResultType } from '../../types';
import Res from './styles';

const Result = ({ result }: { result: ResultType }) => {

    const imgUrl = `img/${result.feed__name.split(' ').join('').toLowerCase()}.png`;

    return (
        <Res.LinkContainer href={result.url} target="_blank">
            <Res.Container>
                <Res.Header>
                    <Res.Logo url={imgUrl} />
                    <Res.Subtitle>{result.feed__name}</Res.Subtitle>
                </Res.Header>            
                <Res.Title>{result.title}</Res.Title>
                <Res.Subtitle>{result.created_at}</Res.Subtitle>
                <Res.Description dangerouslySetInnerHTML={{ __html: result.description }}></Res.Description>
            </Res.Container>
        </Res.LinkContainer>
    )
};

export default Result;