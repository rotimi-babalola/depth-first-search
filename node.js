class Node {
  constructor(value) {
    this.value = value;
    this.leftNode = null;
    this.rightNode = null;
    this.visited = false;
  }

  addLeftNode(leftNode) {
    this.leftNode = leftNode;
  }

  addRightNode(rightNode) {
    this.rightNode = rightNode;
  }
}

module.exports = Node;
