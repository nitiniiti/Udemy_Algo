// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let currentNode = this.head;

        while (currentNode) {
            currentNode = currentNode.next;
            counter++;
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let currentNode = this.head;
        while (currentNode) {
            if (!currentNode.next) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        this.head = this.head && this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previousNode = this.head;
        let currentNode = previousNode && previousNode.next;
        while (currentNode) {
            if (!currentNode.next) {
                previousNode.next = null;
                return;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
    }


    insertLast(element) {
        let node = new Node(element);
        if (!this.head) {
            this.head = node;
            return;
        }
        let currentNode = this.head;
        while (currentNode) {
            if (!currentNode.next) {
                currentNode.next = node;
                return;
            }
            currentNode = currentNode.next;
        }
    }

    getAt(index) {
        if (index < 0) {
            return null;
        }

        let currentNode = this.head;
        let counter = 0;
        while (currentNode) {
            if (index === counter) {
                return currentNode;
            }
            counter++;
            currentNode = currentNode.next;
        }

        return null;
    }

    removeAt(index) {
        if (index < 0) {
            return;
        }

        if (!this.head) {
            return;
        }

        if (index == 0) {
            this.head = this.head.next;
            return;
        }

        let previousNode = this.getAt(index - 1);
        if (previousNode && previousNode.next) {
            previousNode.next = previousNode.next.next;
        }
        return;

    }

    insertAt(element, index) {
        let node = new Node(element);
        if (!this.head) {
            this.head = node;
            return;
        }

        if (index == 0) {
            node.next = this.head;
            this.head = node;
            return;
        }

        let previousNode = this.getAt(index - 1);
        if (previousNode) {
            node.next = previousNode.next;
            previousNode.next = node;
        } else {
            let lastNode = this.getLast();
            lastNode.next = node;
        }
        return;
    }

    forEach(fn) {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (node) {
            fn(node);
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
