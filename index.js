const _ = require("lodash");
const { createSet } = require("./src/createSet");
const { getTimeToExecute } = require("./src/getTimeToExecute");

const sampleSize = 100;

const lodashTimes = [];
const nativeTimes = [];

for (let index = 0; index < sampleSize; index++) {
  const arr = _.range(1, 1000000).map(() => _.random(1, 1000000));
  lodashTimes.push(getTimeToExecute(arr, _.uniq));
  nativeTimes.push(getTimeToExecute(arr, createSet));
}

console.log("starting");
console.log(`Lodash mean: ${_.mean(lodashTimes)} ms`);
console.log(`Native mean: ${_.mean(nativeTimes)} ms`);
console.log(`Delta: ${_.mean(lodashTimes) - _.mean(nativeTimes)} ms`);
