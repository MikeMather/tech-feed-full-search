import Api from "../utils/Api";
import { routes } from "../utils/routes";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  
  const feed = await Api.get(routes.feed);
  return {
    feed: Object.values(feed)
  };
}