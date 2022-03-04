const Key = "";

async function Data(term) {
  const datas = [];
  const tokens = "";

  while (datas.length <= 200) {
    await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${Key}&part=snippet&q=${term}&maxResults=200`
    )
      .then((response) => response.json())
      .then((data) => datas.push(data.items.map((item) => item.id.videoId)));
  }
  return datas;
}

Data("cahorro");

export default Data;
