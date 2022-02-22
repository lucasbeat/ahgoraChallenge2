import ytData from "./api/api";

const nada = ytData("cachorro").then((data) => {
  return data.map((item) => {
    return item;
  });
});

console.log(nada);
