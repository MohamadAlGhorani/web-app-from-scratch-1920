import {
  runApi
} from "./runApi.js";
import {
  renderData
} from "./renderData.js";

const api =
  "https://dbd-stats.info/api/characters";

runApi(api).then(data => cleanData(data));

function cleanData(data) {
  let dataArray = Object.values(data)
  dataArray = dataArray.filter(item => {
    return item.idName !== "None"
  })
  return renderData(dataArray)
}

export {
  cleanData
};