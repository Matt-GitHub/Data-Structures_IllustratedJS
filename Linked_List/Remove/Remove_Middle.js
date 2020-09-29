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
  // RemoveMiddle does not take any parameters
  // It removes the middle node in the linked list
  // If there are an even number of nodes, remove the second middle node
  removeMiddle() {
    // If the linked list is empty
    // Throw an error
    if (this.head === null) {
      throw new Error('linked list is empty');
    }
    // If the linked list only has one value
    // Reset the head and tail node to equal null;
    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
    } else {
      // Track 3 pointers: slow, fast and prev
      // Slow will increment over the linked list 1 node at a time;
      // Slow will end up being the middle node
      // Fast will increment over the linked list 2 nodes at a time;
      // Prev will be the old slow value
      let slow = this.head;
      let fast = this.head;
      let prev = null;
      // Iterate over the linked list until fast and fast.next equal null
      while (fast !== null && fast.next !== null) {
        // Set prev to equal the old slow value
        // Set slow to equal the next node in the linked list
        // Set fast to jump 2 nodes ahead in the linked list
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
      }
      // Edge case if the node we are trying to delete is the tail node
      // If slow (a.k.a the middle node) is the tail node
      // We need to also reassign the tail node!
      if (slow.next === null) {
        // Set prev's next value to equal null
        // Set the tail to equal prev;
        prev.next = null;
        this.tail = prev;
      } else {
        // Set the prev's next value to equal null
        prev.next = slow.next;
      }
    }
  }
}

export default LinkedList;
