// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    if (!list.head) {
        return false;
    }
    let slowPointer = list.head;
    let fastPointer = list.head;

    while (fastPointer && fastPointer.next && fastPointer.next.next) {
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
        if (fastPointer === slowPointer) {
            return true;
        }
    }

    return false;

}

module.exports = circular;
