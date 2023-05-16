export const getGifs = async (category) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=iAqb3NcQSS7yJl1MAEm4B4LQ1jhaGScP&q=${category}&limit=10`;
  
  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  
  return gifs;
};

