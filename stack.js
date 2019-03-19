class Stack {
  constructor() {
    // initializes our stack as an empty array
    this.stack = [];
  }

  // pushes data to the stack
  push(data) {
    this.stack.push(data);
  }

  // pops - removes the last element from the stack and returns it
  pop() {
    return this.stack.pop();
  }
}

module.exports = Stack;
