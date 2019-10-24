const titleCase  = function(text) {
  const textAsArray = text.split(" ");
  return textAsArray;
  // return textAsArray.map((element) => {
  //   return element[0].toUpperCase();
  // })
};

console.log(titleCase("this is an example"));

module.exports = titleCase;