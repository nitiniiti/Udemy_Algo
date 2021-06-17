const Node = require('./node');
// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let storingArray = [root, 'end'];
    let finalWidthArray = [];
    let counter = 0;
    while (storingArray.length) {
        let node = storingArray.shift();
        if (node === 'end') {
            finalWidthArray.push(counter);
            if (storingArray.length) {
                storingArray.push('end');
            }
            counter = 0;
        } else {
            storingArray.push(...node.children);
            counter++;
        }
    }
    return finalWidthArray;
}

const root = new Node(0);
root.add(1);
root.add(2);
root.add(3);
root.children[0].add(4);
root.children[2].add(5);

levelWidth(root);

module.exports = levelWidth;
