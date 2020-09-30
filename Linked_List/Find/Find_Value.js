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

  // Find Value takes 1 parameter, the value you are looking for
  // Find value will search the linked list and return a boolean
  // True if the value exists in the linked list
  // False if the value does not exist in the linked list
  findValue(value) {
    // If the linked list is empty
    // return false
    if (this.head === null) {
      return false;
    }
    // We need to iterate over the linked list
    // Create a variable current and set it to the head node
    // We will start checking the values here and continue until we hit the end
    let current = this.head;
    while (current !== null) {
      // If the current value equals the value we are looking for
      // Return true
      if (current.value === value) {
        return true;
      }
      // Else
      // Keep iterating over the linked list
      current = current.next;
    }
    // We did not find the value we were looking for
    // Return false
    return false;
  }
}

export default LinkedList;
