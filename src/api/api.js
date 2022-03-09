const Key = "";

async function Data(term, token, data = []) {
  if (data.length < 200) {
    let url = `https://www.googleapis.com/youtube/v3/search?key=${Key}&type=video&part=snippet&q=${term}&maxResults=200`;

    if (token) {
      url += `&pageToken=${token}`;
    }

    const { items, nextPageToken } = await fetch(url).then((response) =>
      response.json()
    );

    data.push(...items.map((idList) => idList.id.videoId));

    console.log(data.filter((e) => e));

    return Data(term, nextPageToken, data);
  }

  return data;
}

console.log(Data("cahorro"));

export default Data;
