async function ytData(term) {
  const KEY = "";

  const page1 = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${KEY}&part=snippet&q=${term}&maxResults=200`
  )
    .then((response) => response.json())
    .then((data) => ({
      items: data.items.map((item) => item.id.videoId).filter((e) => e),
      nextPageToken: data.nextPageToken,
    }))
    .catch((err) => {
      console.log(err);
    });

  console.log(page1);

  const page2 = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${KEY}&part=snippet&pageToken=${page1.nextPageToken}&maxResults=200`
  )
    .then((response) => response.json())
    .then((data) => ({
      items: data.items.map((item) => item.id.videoId).filter((e) => e),
      nextPageToken: data.nextPageToken,
    }));

  console.log(page2);

  const page3 = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${KEY}&part=snippet&pageToken=${page2.nextPageToken}&maxResults=200`
  )
    .then((response) => response.json())
    .then((data) => ({
      items: data.items.map((item) => item.id.videoId).filter((e) => e),
      nextPageToken: data.nextPageToken,
    }));

  console.log(page3);

  const page4 = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${KEY}&part=snippet&pageToken=${page3.nextPageToken}&maxResults=200`
  )
    .then((response) => response.json())
    .then((data) => ({
      items: data.items.map((item) => item.id.videoId).filter((e) => e),
      nextPageToken: data.nextPageToken,
    }));

  console.log(page4);

  const formattedIds = page1.items.toString();

  console.log(formattedIds);

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
