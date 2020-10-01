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

  detectCycle() {
    if (this.head === null) {
      return false;
    }

    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow == fast) {
        return true;
      }
    }
    return false;
  }
}

let test = new LinkedList();

test.insertTail(1);
test.insertTail(2);
test.insertTail(2);
test.insertTail(4);
test.insertTail(5);
test.insertTail(6);
test.tail.next = test.head.next.next.next;
console.log(test.detectCycle());
