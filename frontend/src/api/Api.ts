

//export const endpoint = 'https://blogsearch-prod.herokuapp.com';
export const endpoint = 'http://localhost:1337';

export const api = {
    search: (terms: string) => {
        const route = encodeURI(`${endpoint}/search?q=${terms}`);
        console.log(route)
        return fetch(route).then(res => {
            console.log(res);
            if (res.ok) {
                res.json()
            }
        });
    }
}