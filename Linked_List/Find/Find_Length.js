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

  // Find length takes 0 parameters
  // Find length provides you with how many nodes are in the linked list
  findLength() {
    // Create a variable to track the length
    // Set it to 0 as the default length (no nodes in linked list)
    let length = 0;
    // Check to see if the head node is null
    // If the linked list is empty just return the length (0)
    if (this.head === null) {
      return length;
    }
    // We need to iterate over every node in the linked list
    // Create a variable current to track the nodes in the linked list
    let current = this.head;
    // While current is not null
    while (current !== null) {
      // Go through each node and increment the length
      // Set the current to equal the next node in the linked list
      length++;
      current = current.next;
    }
    // Return the length
    return length;
  }
}

export default LinkedList;
