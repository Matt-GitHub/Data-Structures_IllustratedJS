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

  removeTail() {
    if (this.head === null) {
      throw new Error('linked list is empty');
    }

    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
    } else {
      let previous = null;
      let current = this.head;
      while (current.next !== null) {
        previous = current;
        current = current.next;
      }
      previous.next = null;
    }
  }
}

export default LinkedList;
