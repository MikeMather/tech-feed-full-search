import React from 'react';
import { ResultType } from '../../types';
import { ResultContainer } from './styles';

const Result = ({ result }: { result: ResultType }) => {

    return (
        <ResultContainer>
            <a href={result.url}>{result.title}</a>
            <span>{result.feed__name}</span>
            <p dangerouslySetInnerHTML={{ __html: result.description }}></p>
        </ResultContainer>
    )
};

export default Result;