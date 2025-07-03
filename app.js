const l = require('lodash');

const i = [1,[2],[3],[4]];
const item = l.flatten(i);
console.log(item);