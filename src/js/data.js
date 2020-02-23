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
    return item.idName !== "None"; // remove one item of the array
  });

  filterDataByDifficulty(dataArray);
  filterDataByGender(dataArray);

}
export {
  cleanData
};