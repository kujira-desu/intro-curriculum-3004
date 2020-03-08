'use strict';

/**
 * 引数で受け取った数値配列を全て足す
 */
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}

/**
 * 引数で受け取った数値配列を全て掛ける
 */
function multi(numbers) {
  let result = 1;
  for (let num of numbers) {
    result = result * num;
  }
  return result;
}

module.exports = { add, multi };
