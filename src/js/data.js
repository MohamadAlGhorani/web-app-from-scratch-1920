import {
  renderData
} from "./render.js";

function cleanData(data) {
  let dataArray = Object.values(data);
  dataArray = dataArray.filter(item => {
    return item.idName !== "None";
  })
  return renderData(dataArray);
}

export {
  cleanData
};