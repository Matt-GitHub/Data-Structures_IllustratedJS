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

  insertHead(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }
  }
  // Remove Head function does not take any parameters
  // It just removes the head node of a linked list
  removeHead() {
    // If the linked list is empty
    // There is no head node to remove
    // Throw a error
    if (this.head === null) {
      throw new Error('Linked list is empty');
    }
    // If the linked list only has one node
    // Reset the head and tail node to equal null
    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
    } else {
      // The linked list has multiple nodes
      // Move the head node to equal the next node in the linked list
      // The old head node will be orphaned and garbage collected
      this.head = this.head.next;
    }
  }
}

export default LinkedList;
