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

  findMiddle() {
    // If the linked list is empty
    // Throw an error
    if (this.head === null) {
      throw new Error('linked list is empty');
    }
    // If the linked list only has 1 node
    // Return the head value
    if (this.head.next === null) {
      return this.head.value;
    } else {
      // Track 2 pointers: slow and fast
      // Slow will increment over the linked list 1 node at a time;
      // Slow will end up being the middle node
      // Fast will increment over the linked list 2 nodes at a time;
      let slow = this.head;
      let fast = this.head;
      // Iterate over the linked list until fast and fast.next equal null
      while (fast !== null && fast.next !== null) {
        // Set slow to equal the next node in the linked list
        // Set fast to jump 2 nodes ahead in the linked list
        slow = slow.next;
        fast = fast.next.next;
      }
      return slow.value;
    }
  }
}

export default LinkedList;
