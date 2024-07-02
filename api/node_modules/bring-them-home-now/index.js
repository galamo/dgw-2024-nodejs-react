const data = require("./data.json");

function searchByName(name) {
  if (typeof name !== "string") return;
  return data.filter((k) =>
    k?.name?.toLowerCase()?.includes(name.toLowerCase())
  );
}
function searchByLowerAge(age) {
  if (typeof age !== "number") return;
  return data.filter((k) => Number(k?.age) <= age);
}

function getIDFHostages() {
  return data.filter((k) => k?.isIDF);
}
// console.log(searchByName("bibas"));
// console.log(searchByLowerAge(10));
// console.log(getIDFHostages());
module.exports = { data, searchByName, searchByLowerAge, getIDFHostages };
