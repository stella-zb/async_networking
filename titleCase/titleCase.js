const titleCase  = function(text) {

  const textAsArray = text.split(" ");

  let output = [];

  textAsArray.forEach((element) => {
    output.push(`${element[0].toUpperCase()}${element.slice(1).toLowerCase()}`);
  })

  return output.join(' ');
};

console.log(titleCase("this is an example"));

module.exports = titleCase;