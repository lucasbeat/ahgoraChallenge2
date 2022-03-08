const Key = "";

async function Data(term) {
  const data = [];
  let token = "";
  let count = 0;
  while (data.length < 200) {
    let url = `https://www.googleapis.com/youtube/v3/search?key=${Key}&part=snippet&q=${term}&maxResults=200`;
    if (token) {
      url += `&pageToken=${token}`;
    }
    const result = await fetch(url).then((response) => response.json());
    data.push(...result.items);
    token = result.nextPageToken;
    count++;
  }
  console.log(count);
  return data;
}

console.log(Data("cahorro"));

export default Data;
