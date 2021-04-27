import React from 'react';
import { ResultType } from '../../types';
import { ResultContainer } from './styles';

const Result = ({ result }: { result: ResultType }) => {

    return (
        <ResultContainer>{result.title}</ResultContainer>
    )
};

export default Result;