const titleCase = (text) => {
  if (text === "") {
    return text
  } else {
    const textAsArray = text.split(" ");
    let output = [];
    textAsArray.forEach((element) => {
      output.push(`${element[0].toUpperCase()}${element.slice(1).toLowerCase()}`);
    })
    return output.join(' ');
  }

};

console.log(titleCase(""));

module.exports = titleCase;