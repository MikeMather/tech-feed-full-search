import React from 'react';
import { ResultType } from '../../types';
import { ResultContainer } from './styles';

const Result = ({ result }: { result: ResultType }) => {

    return (
        <ResultContainer>
            <h2>{result.title}</h2>
        </ResultContainer>
    )
};

export default Result;