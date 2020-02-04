import {
  runApi
} from "./runApi.js";
import {
  renderData
} from "./renderData.js";

const api =
  "https://cors-anywhere.herokuapp.com/https://dbd-stats.info/api/characters";

runApi(api).then(data => clean(data));

function clean(data) {
  let dataArray = Object.values(data)
  dataArray = dataArray.filter(item => {
    return item.idName !== "None"
  })
  return renderData(dataArray)
}

export {
  clean
};