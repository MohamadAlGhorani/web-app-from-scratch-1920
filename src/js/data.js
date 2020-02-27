import {
  renderData
} from "./render.js";
import {
  filterDataByDifficulty,
  filterDataByGender
} from "./filter.js";

function cleanData(data) {
  let dataArray = Object.values(data); // use spread operator?

  dataArray = dataArray.filter(item => {
    return item.idName !== "None"; // remove one item of the array
  });
  const dataForsessionStorage = JSON.stringify(dataArray)
  sessionStorage.setItem("data", dataForsessionStorage)

  filterDataByDifficulty(dataArray);
  filterDataByGender(dataArray);

}
export {
  cleanData
};