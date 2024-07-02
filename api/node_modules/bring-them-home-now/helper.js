const fs = require("node:fs");
const bringThemHomeNow = require("./index.json");
console.log(bringThemHomeNow);
const newData = [];
bringThemHomeNow.forEach((user) => {
  const age = user?.name?.slice(-2);
  const name = user?.name?.slice(0, user?.name.length - 2);
  const image = user.image;

  newData.push({ name, age, image });
});

fs.writeFile("./index2.json", JSON.stringify(newData), "utf-8", (err) => {
  console.log(err);
});
