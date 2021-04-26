import React, { FormEvent, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { SearchContainer } from './styles';
import { api } from '../../api/Api';


const Search = () => {
    const history = useHistory();
    const location = useLocation();
    const [search, setSearch] = useState('')
    const [results, setResults] = useState([]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const query = params.get('query');

        if (query) {
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
        <SearchContainer>
            <form onSubmit={onSubmit}>
                <input name="query" type="text" onChange={e => setSearch(e.target.value)} value={search} />
            </form>
            {results && results.map((post: any) => (
                <div key={post.id}>{post.title}</div>
            ))}
        </SearchContainer>
    )
}

export default Search;