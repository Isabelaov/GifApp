export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=t8u6MRgi7jx3WNjFkHKvNLmy2iStceCP&q=${category}&limit=10`;
  const res = await fetch(url);
  const { data } = await res.json();
  const gifs = data.map((img: any) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
