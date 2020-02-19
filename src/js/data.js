import {
  renderData
} from "./render.js";
import {
  filterDataByDifficulty,
  filterDataByGender
} from "./filter.js";

function cleanData(data) {
  let dataArray = Object.values(data);

  dataArray = dataArray.filter(item => {
    return item.idName !== "None";
  });

  filterDataByDifficulty(dataArray)
  filterDataByGender(dataArray)

  // renderData(dataArray)

}
export {
  cleanData
};