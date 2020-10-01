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
  // Remove duplicates does not take any parameters
  // It will remove the duplicate values of a sorted linked list
  // Meaning it will keep only 1 unique value of each node in the linked list
  removeDuplicates() {
    // If the linked list is empty or only has 1 value then we will return the head node
    // This is because if there is only 0 or 1 values there is nothing duplicate to remove
    if (this.head === null || this.head.next === null) return this.head;

    // Create a variable to track the nodes in the linked list
    // Set the variable to equal the head node
    let current = this.head;
    // Iterate over the linked list until we get to the end of the linked list
    while (current.next !== null) {
      // If the current value does not equal the next value
      // That means it is not a duplicate and we can continue iterating
      if (current.value !== current.next.value) {
        // Set current to equal the next node in the linked list
        current = current.next;
      } else {
        // We need to keep moving the next node in the linked list until we meet 1 of 2 conditions
        // Either the value is unique and we can change current
        // Or the value is null and we exit the while loop
        current.next = current.next.next;
      }
    }
    // Return the head node, not current
    return this.head;
  }
}

export default LinkedList;
