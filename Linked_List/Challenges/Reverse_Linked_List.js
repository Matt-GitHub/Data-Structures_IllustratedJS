class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertTail(value) {
    let newValue = new Node(value);
    if (this.head === null) {
      this.head = newValue;
      this.tail = newValue;
    } else {
      this.tail.next = newValue;
      this.tail = newValue;
    }
  }

  reverseLinkedList() {
    // If the linked list is empty
    // Throw an error
    if (this.head === null) {
      throw new Error('linked list is empty');
    }
    // We need to track 2 variables: current and previous
    // Current will track the current node
    // Previous will track the node prior to current
    let current = this.head;
    let previous = null;
    // Iterate over the linked list until current is equal to null
    while (current !== null) {
      // We need to change what the current value is pointing to
      // It is currently pointing to the next node in the linked list
      // We need current to point to the node before it
      // We create a variable temp to store the old next node while we reassign it
      let temp = current.next;
      // Set the current's next node to equal the previous node
      // Set previous to equal the current node
      // Set current to equal the next node in the linked list (temp)
      current.next = previous;
      previous = current;
      current = temp;
    }
    // Return the new head node
    return previous;
  }
}

export default LinkedList;
