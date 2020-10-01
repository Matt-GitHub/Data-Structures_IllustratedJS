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

  // Detect Cycle does not take any parameters
  // Detect a cycle will return a boolean value of true or false
  detectCycle() {
    // If the linked list is empty
    // Return false, the linked list is not a cycle
    if (this.head === null) {
      return false;
    }
    // Create 2 pointers: slow and fast
    // Both pointers will point to the head node
    let slow = this.head;
    let fast = this.head;
    // We need to iterate over the linked list until we meet 1 of 2 conditions
    // Either the fast tracker will hit null
    // Or the fast and slow pointer will meet
    // In the case they meet we will return true

    // While fast and fast.next do not equal null - Iterate over the linked list
    while (fast !== null && fast.next !== null) {
      // Set slow to equal the next value in the linked list
      // Set fast to equal 2 values ahead in the linked list
      slow = slow.next;
      fast = fast.next.next;
      // If the slow and fast value are the same node
      // Return true
      if (slow == fast) {
        return true;
      }
    }
    // The fast tracker hit a null value (end of linked list)
    // Return false
    return false;
  }
}

export default LinkedList;
