const Stack = require('./stack');
const Node = require('./node');

class Graph {
  constructor(rootNode) {
    this.rootNode = rootNode;
    this.DFSStack = new Stack();

    if (!rootNode) {
      return 'Please pass in a root node!';
    }

    // push root node to stack
    this.DFSStack.push(this.rootNode);
  }

  /**
   * Searches a graph using Depth First Search
   * @param {string} queryValue
   */
  dfsTraverse(queryValue) {
    while (this.DFSStack.stack.length > 0) {
      this.currentNode = this.DFSStack.pop();
      if (!this.currentNode.visited) {
        // push left and right node to the stack
        // mark it as visited
        this.currentNode.visited = true;
        console.log(this.currentNode.value);

        // push children nodes to the stack
        if (this.currentNode.leftNode) {
          this.DFSStack.push(this.currentNode.leftNode);
        }

        if (this.currentNode.rightNode) {
          this.DFSStack.push(this.currentNode.rightNode);
        }
      }
    }
  }

  dfs(queryValue) {
    // console.log(this.DFSStack.stack, 'stack >>>>');
    while (this.DFSStack.stack.length > 0) {
      this.currentNode = this.DFSStack.pop();
      if (!this.currentNode.visited) {
        // push left and right node to the stack
        // mark it as visited
        this.currentNode.visited = true;
        console.log(this.currentNode.value, '>>>>');

        // check if the value of query is a match
        // for the current node's value
        if (this.currentNode.value === queryValue) {
          return `Found ${queryValue}`;
        }

        // push children nodes to the stack
        if (this.currentNode.leftNode) {
          this.DFSStack.push(this.currentNode.leftNode);
        }

        if (this.currentNode.rightNode) {
          this.DFSStack.push(this.currentNode.rightNode);
        }
      }
    }
    return `Could not find ${queryValue}`;
  }
}

const rootNode = new Node('rootNode');
const node2 = new Node('node2');
const node3 = new Node('node3');
const node4 = new Node('node4');
const node5 = new Node('node5');
const node6 = new Node('node6');
const node7 = new Node('node7');
const node8 = new Node('node8');

// create graph of nodes
rootNode.addLeftNode(node2);
rootNode.addRightNode(node3);

node2.addLeftNode(node4);
node2.addRightNode(node5);

node3.addLeftNode(node6);
node3.addRightNode(node7);

node4.addLeftNode(node8);

// Instantiate graph class
const graph1 = new Graph(rootNode);
// console.log(graph1.dfsTraverse());

const graph2 = new Graph(rootNode);
console.log(graph2.dfs('node2'));
