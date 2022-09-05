// eslint-disable-next-line max-classes-per-file
const { NotImplementedError } = require('../extensions/index.js');

// const { lNode } = require('../extensions/l-node.js');

/**
 * Given a singly linked l of integers l and an integer k,
 * remove all elements from l l that have a value equal to k.
 *
 * @param {l} l
 * @param {Number} k
 * @return {l}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked ls are already defined using interface
 * class lNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(l, k) {
  let current = l;
  let index = 0;
  const indexArr = [];

  while (current) {
    if (current.value === k) {
      index += 1;
      indexArr.push(index);
      current = current.next;
    } else {
      index += 1;
      current = current.next;
    }
  }

  if (indexArr.length < 1) {
    return l;
  }

  indexArr.forEach((index, number) => {
    current = l;
    if (index - number === 1) {
      l.value = current.next.value;
      current.next = current.next.next;
    } else {
      let prev = null;
      let i = 1;

      while (i < index - number) {
        prev = current;
        current = current.next;
        i += 1;
      }
      prev.next = current.next;
    }
  });
  return l;
}

module.exports = {
  removeKFromList,
};
