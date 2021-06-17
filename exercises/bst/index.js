// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }

    insert(data) {
        if (data < this.data && this.left) {
            this.left.insert(data);
        } else if (data < this.data && !this.left) {
            let newNode = new Node(data);
            this.left = newNode;
        } else if (data > this.data && this.right) {
            this.right.insert(data);
        } else if (data > this.data && !this.right) {
            let newNode = new Node(data);
            this.right = newNode;
        }
    }

    contains(data) {
        if (data === this.data) {
            return this
        } else if (data > this.data && this.right) {
            return this.right.contains(data);
        } else if (data < this.data && this.left) {
            return this.left.contains(data);
        } else {
            return null
        }
    }
}

module.exports = Node;
