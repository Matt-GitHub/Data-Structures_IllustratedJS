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
  findLength() {
    let length = 0;

    if (this.head === null) {
      return length;
    }

    let current = this.head;
    while (current !== null) {
      length++;
      current = current.next;
    }
    return length;
  }
}

let test = new LinkedList();
test.insertTail('value');

console.log('then length equals', test.findLength());
