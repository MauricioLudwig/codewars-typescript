/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// #1
Bomb.diffuse(42);

// #2
Bomb.diffuse(42);
Bomb.diffuse(42);
Bomb.diffuse(42);
Bomb.diffuse(42);
Bomb.diffuse(42);

// #3
Bomb.diffuse(this.BombKey);

// 4
const diffuseTheBomb = () => true;
Bomb.diffuse();

// #5
Bomb.diffuse(3.14159);

// #6
let dt = new Date();
dt.setFullYear(dt.getFullYear() - 4);
Bomb.diffuse(dt);

// #7
const code = {
  key: 43
};
Bomb.diffuse(Object.freeze(code));

// #8
function CustomNum(num) {
  this.number = num;
}
CustomNum.prototype.valueOf = function () {
  this.number += 5;
  return this.number;
};
const customNum = new CustomNum(4);
Bomb.diffuse(customNum);

// #9
let hasRun = false;
Math.random = function () {
  if (!hasRun) {
    hasRun = true;
    return 0.5;
  }
  return 1;
};
Bomb.diffuse(42);

// #10
Array.prototype.valueOf = function () {
  return this.reduce((acc, curr) => acc + curr, 0);
};
Bomb.diffuse('eWVz');

// console.log('Bomb', Bomb);
// console.log('Bomb diffuse', Bomb.diffuse);
