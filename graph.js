class Graph {
  constructor() {
    this.graph = {};

    // push root node to stack
    // this.DFSStack.push(this.rootNode);
  }

  addNode(node) {
    // check if the node is in the graph before adding
    if (!this.nodeExists(node)) {
      this.graph[node] = { edges: {}, visited: false };
    }
  }

  addEgde(startNode, endNode) {
    if (this.nodeExists(startNode) && this.nodeExists(endNode)) {
      this.graph[startNode].edges[endNode] = true;
      this.graph[endNode].edges[startNode] = true;
    }
  }

  /**
   * returns a boolean indicating if a node
   * exists in the graph
   * @param {node} node
   */
  nodeExists(node) {
    return Boolean(this.graph[node]);
  }

  dfs() {
    //
  }
}

const graph = new Graph();

graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');

graph.addEgde('A', 'B');
graph.addEgde('B', 'C');
graph.addEgde('A', 'D');

console.log(graph.graph, '>>>');
