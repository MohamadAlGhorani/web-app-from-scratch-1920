import {
  runApi
} from "./runApi.js";

const api =
  "https://cors-anywhere.herokuapp.com/https://dbd-stats.info/api/characters";

runApi(api).then(data => clean(data));

function clean(data) {
  console.log("DATA", data);
}

export {
  clean
};