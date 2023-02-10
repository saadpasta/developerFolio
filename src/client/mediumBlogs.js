export const getMediumBlogs = async () => {
  const {MEDIUM_USERNAME} = process.env;
  if (!MEDIUM_USERNAME) return "Error";
  const url = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`;

  const result = await fetch(url);
  if (!result.ok) return "Error";

  const res = await result.json();
  return res.items;
};
