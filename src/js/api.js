import {
  cleanData
} from "./data.js";
import {
  detailData
} from "./render.js";

const url = "https://dbd-stats.info/api/characters";

function runApi() {
  return fetch(url)
    .then(res => res.json())
    .then(data => cleanData(data))
    .catch(error => {
      console.log(error);
    });
}

function getCharacterInfo(id) {
  return fetch(url)
    .then(res => res.json())
    .then(data => detailData(data, id))
    .catch(error => {
      console.log(error);
    });
}

export {
  runApi,
  getCharacterInfo
};