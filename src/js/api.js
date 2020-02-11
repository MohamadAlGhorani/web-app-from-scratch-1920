import {
  cleanData
} from "./data.js";

function runApi() {
  const url = "https://dbd-stats.info/api/characters"
  return fetch(url)
    .then(res => res.json())
    .then(data => cleanData(data))
    .catch(error => {
      console.log(error);
    });
}

export {
  runApi
};