let analyzeArray = (arr) => {
  let obj = {};
  let sortedArr = arr.sort();
  let arrLen = sortedArr.length;
  let minX = sortedArr[0];
  let maxX = sortedArr[arrLen - 1];
  let averageIndex = arrLen / 2;
  let averageX = sortedArr[averageIndex];
  obj.average = averageX;
  obj.min = minX;
  obj.max = maxX;
  obj.length = arrLen;
  return obj;
};

module.exports = analyzeArray;
