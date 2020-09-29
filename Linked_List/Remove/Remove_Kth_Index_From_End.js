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

  removeKthIndexFromEnd(index) {
    if (this.head === null) {
      throw new Error('linked list is empty');
    }
    let finder = this.head;
    let current = this.head;
    let currentIndex = 1;
    while (currentIndex <= index) {
      if (finder === null) {
        throw new Error('Index is out of range');
      }
      currentIndex++;
      finder = finder.next;
    }
    if (finder === null) {
      this.head = this.head.next;
      return;
    }
    while (finder.next !== null) {
      finder = finder.next;
      current = current.next;
    }
    current.next = current.next.next;
  }
}

export default LinkedList;
