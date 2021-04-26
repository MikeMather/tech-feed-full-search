import React, { FormEvent, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { SearchContainer } from './styles';
import { api } from '../../api/Api';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const Search = () => {
    const query = useQuery();
    const history = useHistory();

    useEffect(() => {
        const searchTerms = query.get('query');
        if (searchTerms) {
            api.search(searchTerms).then(res => {
                console.log(res);
            });
        }
    }, [query])

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        history.push(`/search?query=value`)
    }

    return (
        <SearchContainer>
            <form onSubmit={onSubmit}>
                <input type="text" />
            </form>
        </SearchContainer>
    )
}

export default Search;