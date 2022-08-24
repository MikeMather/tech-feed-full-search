/** @type {import('./$types').PageServerLoad} */
export async function load() {
  
  const feed = await fetch('https://tech-feed-api.onrender.com/feed').then(res => res.json());
  return {
    feed
  };
}