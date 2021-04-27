import React, { FormEvent, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { SearchButton, SearchContainer, SearchForm } from './styles';
import { api } from '../../api/Api';
import { AppContainer } from '../styles';
import Result from '../Result/Result';
import ArrowRight from '../icons/ArrowRight';


const Search = () => {
    const history = useHistory();
    const location = useLocation();
    const [hasSearched, setHasSearched] = useState(false);
    const [search, setSearch] = useState('')
    const [results, setResults] = useState([]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const query = params.get('query');

        if (query) {
            setHasSearched(true);
            setSearch(query);
            setResults([])
            api.search(query).then(res => {
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
                    <input name="query" type="text" onChange={e => setSearch(e.target.value)} value={search} />
                    <SearchButton type="submit"><ArrowRight /></SearchButton>
                </SearchForm>
            </SearchContainer>
            {results && results.map((post: any) => (
                <Result key={post.id} result={post} />
            ))}
        </AppContainer>
    )
}

export default Search;