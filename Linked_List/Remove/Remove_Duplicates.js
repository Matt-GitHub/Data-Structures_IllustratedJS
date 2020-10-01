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

  removeDuplicates() {
    if (this.head === null || this.head.next === null) return this.head;
    let current = this.head;
    while (current.next !== null) {
      if (current.value !== current.next.value) {
        current = current.next;
      } else {
        current.next = current.next.next;
      }
    }
    return this.head;
  }
}

export default LinkedList;
