async function ytData(term) {
  const KEY = "AIzaSyCQi-3MgbF44-qG7bDf8IEwpnAq48V-mas";

  const search = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${KEY}&part=snippet&q=${term}&maxResults=5`
  )
    .then((response) => response.json())
    .then((data) => {
      return data.items.map((item) => item.id.videoId);
    })
    .catch((err) => {
      console.log(err);
    });

  const formattedIds = search.toString();
  const videos = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=id,contentDetails,snippet&id=${formattedIds}&key=${KEY}`
  )
    .then((res) => res.json())
    .then((data) => {
      return data.items.map((item) => ({
        id: item.id,
        duration: item.contentDetails.duration,
        title: item.snippet.title,
        description: item.snippet.description,
      }));
    })
    .catch((err) => {
      console.log(err);
    });

  return videos;
}

export default ytData;
