'use strict';
 
const answer = require('./hiker');
 
const scenarios = [
  {
    input: 99,
    output: "ninety nine"
  },
  {
    input: 300,
    output: "three hundred"
  },
  {
    input: 310,
    output: "three hundred and ten"
  },
  {
    input: 1501,
    output: "one thousand, five hundred and one"
  },
  {
    input: 3000,
    output: "three thousand"
  },
  {
    input: 12609,
    output: "twelve thousand, six hundred and nine"
  },
  {
    input: 512607,
    output: "five hundred and twelve thousand, six hundred and seven"
  },
  {
    input: 43112603,
    output: "forty three million, one hundred and twelve thousand, six hundred and three"
  },
  {
    input: 3000000,
    output: "three million"
  },
  {
    input: 43112603110,
    output: "forty three billion, one hundred and twelve million, six hundred and three thousand, one hundred and ten"
  }
];
 
describe('answer', () => {
  scenarios.forEach((scenario) => {
    it(`should render the appropriate description for ${scenario.input}`, () => {
      expect(answer(scenario.input)).toEqual(scenario.output);
    });
  });
});