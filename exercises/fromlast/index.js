// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    if (!list.head) {
        return null
    }

    let forwardPointer = list.head;
    let backwardPointer = list.head;
    let counter = 0;

    while (counter < n) {
        if (forwardPointer && forwardPointer.next) {
            forwardPointer = forwardPointer.next;
            counter++;
        }
    }

    while (forwardPointer && forwardPointer.next) {
        forwardPointer = forwardPointer.next;
        backwardPointer = backwardPointer.next;
    }

    return backwardPointer;

}

module.exports = fromLast;
