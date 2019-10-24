const assert = require('chai').assert;
const titleCase = require('../titleCase');

describe('#titleCase', () => {
  it ('this is an sample', () => {
    const expected = "This Is An Example";
    const actual = titleCase('this is an sample');
    assert.equal(expected, actual);
  });

  it ('test', () => {
    const expected = "Test";
    const actual = titleCase('test');
    assert.equal(expected, actual);
  });

  it ('i r cool', () => {
    const expected = "I R Cool";
    const actual = titleCase('i r cool');
    assert.equal(expected, actual);
  });

  it ('WHAT HAPPENS HERE', () => {
    const expected = "What Happens Here";
    const actual = titleCase('WHAT HAPPENS HERE');
    assert.equal(expected, actual);
  });

  it ('', () => {
    const expected = "";
    const actual = titleCase('');
    assert.equal(expected, actual);
  });

  it ('A', () => {
    const expected = "A";
    const actual = titleCase('A');
    assert.equal(expected, actual);
  });
});