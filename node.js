class Node {
  constructor(value) {
    this.value = value;
    // this.leftNode = null;
    // this.rightNode = null;
    this.visited = false;
    this.edges = [];
  }

  addEdge(neighbour) {
    this.edges.push(neighbour);
  }
}

module.exports = Node;
