

//export const endpoint = 'https://blogsearch-prod.herokuapp.com';
export const endpoint = 'http://localhost:8000';

export const api = {
    search: (terms: string) => {
        const route = encodeURI(`${endpoint}/search?q=${terms}`);
        return fetch(route).then(res => {
            if (res.ok) {
                return res.json()
            }
        });
    }
}