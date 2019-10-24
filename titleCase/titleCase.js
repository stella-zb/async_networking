const titleCase  = function(text) {
  let textAsArray = text.split(" ");
  textAsArray.forEach((element) => {
    console.log(element[0]);
    element[0].toUpperCase();
  })
  return textAsArray;
};

console.log(titleCase("this is an example"));

module.exports = titleCase;