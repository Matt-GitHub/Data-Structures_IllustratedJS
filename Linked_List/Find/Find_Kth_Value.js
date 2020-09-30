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

  findKthValue(index) {
    if (this.head === null) {
      throw new Error('linked list is empty');
    }
    let current = this.head;
    let currentIndex = 0;
    while (currentIndex < index) {
      if (current.next === null) {
        throw new Error('index out of range');
      }
      currentIndex++;
      current = current.next;
    }
    return current.value;
  }
}

export default LinkedList;
