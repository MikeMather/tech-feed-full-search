import { ResultType } from "../types";
import formatDistance from 'date-fns/formatDistance';

export const endpoint = 'https://blogsearch-prod.herokuapp.com';
//export const endpoint = 'http://localhost:8000';

const processResults = (posts: any[]): ResultType[] => {
    return posts.map((post: ResultType) => {
        return {
            ...post,
            created_at: formatDistance(new Date(post.created_at), new Date(), { addSuffix: true })
        }
    });
}


export const api = {
    search: (terms: string) => {
        const route = encodeURI(`${endpoint}/search?q=${terms}`);
        return fetch(route).then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then((posts: any[]) => processResults(posts));
    },
    feed: () => {
        return fetch(`${endpoint}/feed`).then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then((posts: any[]) => processResults(posts));
    }
}