import React, { FormEvent, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { ResultsContainer, SearchButton, SearchContainer, SearchForm } from './styles';
import { api } from '../../api/Api';
import { AppContainer } from '../styles';
import Result from '../Result/Result';
import ArrowRight from '../icons/ArrowRight';
import Loader from '../Loader';
import { ResultType } from '../../types';


const Search = () => {
    const history = useHistory();
    const location = useLocation();
    const [hasSearched, setHasSearched] = useState(true);
    const [search, setSearch] = useState('')
    const [results, setResults] = useState<ResultType[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const query = params.get('query');

        if (query) {
            setLoading(true);
            setSearch(query);
            setResults([])
            api.search(query).then((res: ResultType[]) => {
                setLoading(false);
                setResults(res);
            });
        }
        else {
            setLoading(true);
            setResults([])
            api.feed().then((res: ResultType[]) => {
                setLoading(false);
                setResults(res);
            });
        }
        
    }, [location])

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        setResults([])
        history.push(encodeURI(`/search?query=${search}`))
    }

    return (
        <AppContainer>
            <SearchContainer hasValue={hasSearched}>
                <SearchForm onSubmit={onSubmit}>
                    <input name="query" type="text" placeholder="Search tech posts" onChange={e => setSearch(e.target.value)} value={search} />
                    <SearchButton type="submit"><ArrowRight /></SearchButton>
                </SearchForm>
            </SearchContainer>
            <ResultsContainer>
                {loading && <Loader />}
                {(results && !loading ) && results.map((post: any) => (
                    <Result key={post.id} result={post} />
                ))}
            </ResultsContainer>
        </AppContainer>
    )
}

export default Search;