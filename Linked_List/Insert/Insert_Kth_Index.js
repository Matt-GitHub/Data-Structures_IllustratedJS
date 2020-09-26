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
    let new_node = new Node(value);
    if (this.head === null) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      let temp = this.head;
      this.head = new_node;
      this.head.next = temp;
    }
  }

  insertAtKthIndex(value, index) {
    let new_node = new Node(value);

    if (this.head === null) {
      if (index !== 0) {
        throw new Error('Linked List is empty');
      } else {
        this.head = new_node;
        this.tail = new_node;
        return;
      }
    }

    if (this.head !== null && index === 0) {
      let temp = this.head;
      this.head = new_node;
      this.head.next = temp;
      return;
    }

    let currentIndex = 0;
    let current = this.head;
    let previous = null;
    while (currentIndex < index) {
      if (current === null) {
        throw new Error('Index is out of range');
      } else {
        previous = current;
        current = current.next;
        currentIndex++;
      }
    }
    if (current === null) {
      previous.next = new_node;
      new_node.next = current;
      this.tail = new_node;
    } else {
      previous.next = new_node;
      new_node.next = current;
    }
  }
}

// let test = new LinkedList();
// test.insertHead('value2');
// test.insertHead('value1');
// test.insertHead('value0');
// test.insertAtKthIndex('this one', 3);
// console.log('tail', test.tail);
// console.log('before tail', test.head.next.next);
export default LinkedList;
