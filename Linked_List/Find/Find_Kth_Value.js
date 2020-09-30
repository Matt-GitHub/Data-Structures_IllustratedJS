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
    let newValue = new Node(value);
    if (this.head === null) {
      this.head = newValue;
      this.tail = newValue;
    } else {
      let temp = this.head;
      this.head = newValue;
      this.head.next = temp;
    }
  }

  // Find Kth Value takes 1 parameter, the index you are looking for
  // It will return the value at that index
  findKthValue(index) {
    // If the linked list is empty
    // Throw an error
    if (this.head === null) {
      throw new Error('linked list is empty');
    }
    // We need to iterate over the linked list until we find the index we are looking for
    // Or we get to the end of the linked list
    // Create a variable current that tracks the current head node
    // Crate a variable currentIndex that represents the current index in the linked list
    let current = this.head;
    let currentIndex = 0;
    // Iterate over the linked list while the current index is less than the index we are looking for
    while (currentIndex < index) {
      // If the current's next value is null that means we are at the end of the linked list
      // This means the index provided is greater than the length of our linked list
      // Throw a new error
      if (current.next === null) {
        throw new Error('index out of range');
      }
      // Else
      // Increment the currentIndex
      // Set the current to equal current's next value
      currentIndex++;
      current = current.next;
    }
    // We have found the index we are looking for
    // Return the current value
    return current.value;
  }
}

export default LinkedList;
