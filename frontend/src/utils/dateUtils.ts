
export const formatPublishedAt = (publishedAt: string) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(publishedAt);
  return 'Published ' + date.toLocaleString(undefined, options);
}