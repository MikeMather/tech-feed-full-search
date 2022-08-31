import Api from "../../utils/Api";
import { routes } from "../../utils/routes";

type LoadData = {
  url: {
    searchParams: URLSearchParams
  }
}

/** @type {import('./$types').PageLoad} */
export async function load({ url }: LoadData) {
  const query = url.searchParams.get("q");
  if (!query) {
    return {
      query,
      results: []
    }
  }
  const results = await Api.get(routes.search, {
    params: {
      q: query
    }
  })
  return {
    query,
    results: Object.values(results)
  };
}