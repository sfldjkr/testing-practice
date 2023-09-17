let reverse = (string) => {
  if (typeof string !== "string") return "Not A Number";
  let intoArray = [];
  for (let char of string) {
    intoArray.unshift(char);
  }
  return intoArray.join("");
};

console.log(reverse("hello world"));

module.exports = reverse;
