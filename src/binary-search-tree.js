// eslint-disable-next-line max-classes-per-file
const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
    this.treeRoot = addNode(this.treeRoot, data);
  }

  has(data) {
    function checkNode(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (node.data < data) {
        return checkNode(node.right, data);
      }
      return checkNode(node.left, data);
    }
    return checkNode(this.treeRoot, data);
  }

  find(data) {
    function findNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (node.data < data) {
        return findNode(node.right, data);
      }
      return findNode(node.left, data);
    }
    return findNode(this.treeRoot, data);
  }

  remove(data) {
    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      }
      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      }
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        node = node.right;
        return node;
      }
      if (!node.right) {
        node = node.left;
        return node;
      }
      let minRightNode = node.right;
      while (minRightNode.left) {
        minRightNode = minRightNode.left;
      }
      node.data = minRightNode.data;

      node.right = removeNode(node.right, minRightNode.data);

      return node;
    }
    this.treeRoot = removeNode(this.treeRoot, data);
  }

  min() {
    if (!this.treeRoot) {
      return this.treeRoot;
    }
    let node = this.treeRoot;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.treeRoot) {
      return this.treeRoot;
    }
    let node = this.treeRoot;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
