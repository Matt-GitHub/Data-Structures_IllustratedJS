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
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  // Remove Head function does not take any parameters
  // It just removes the head node of a linked list
  removeTail() {
    // If the linked list is empty
    // There is no tail node to remove
    // Throw a error
    if (this.head === null) {
      throw new Error('linked list is empty');
    }
    // If the linked list only has one node
    // Reset the head and tail node to equal null
    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
    } else {
      // We need to track the previous and current node
      // The previous node will be used to set the new tail node
      let previous = null;
      let current = this.head;
      // Iterate over the linked list until we hit the tail
      // The current node will be the tail
      // The previous node will be the node before the tail
      while (current.next !== null) {
        previous = current;
        current = current.next;
      }
      // Previous node is the node before the tail
      // Set the previous nodes next node to null
      // Update the tail to equal the previous node
      previous.next = null;
      this.tail = previous;
    }
  }
}

export default LinkedList;
