let capitalize = (string) => {
  let firstLetter = string[0];
  let capitalizeFirstLetter = firstLetter.toUpperCase();
  let stringWithNoFirstLetter = string.substring(1);
  let capitalizedStr = capitalizeFirstLetter.concat(stringWithNoFirstLetter);
  return capitalizedStr;
};
module.exports = capitalize;
