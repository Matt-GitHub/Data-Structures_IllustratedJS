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

  // Function for inserting a value into the middle of our linked list
  // Takes 1 parameter => value
  insertMiddle(value) {
    // Create the new node value and assign it to a variable
    // To create our node we must use our Node class
    // Our Node class accepts 1 value => value
    // Initialize our new_node by using => new
    let new_node = new Node(value);
    // Inserting into the middle of a linked list requires at least 2 nodes
    // Assert that the length of our list is at least 2
    // If LESS THAN 2
    if (this.head === null || this.head.next === null) {
      // Signal that we cannot insert into the middle
      //   return 'cannot insert middle';
      throw new Error(
        'Cannot insert middle with less than 2 nodes in LinkedList'
      );
    } else {
      // We need to create 2 pointers to track where we are in the linked list
      // Each tracker has a purpose
      // FAST will get the value 2 nodes away
      // SLOW will get the next value
      let fast = this.head;
      let slow = this.head;
      // We want to keep moving through the linked list until fast reaches the end
      // We reach the end when fast.next or fast.next.next is null
      while (fast.next !== null && fast.next.next !== null) {
        // Move fast forward 2 steps
        fast = fast.next.next;
        // Move slow forward 1 step
        slow = slow.next;
      }
      // SLOW now represents the middle value
      // We want to make the next value => new_node
      // To do this we must store the current pointer of the middle node in a temp var
      let temp = slow.next;
      // Then we set the next node to => new_node
      slow.next = new_node;
      // Our new_node now has to point to the temp variable, which continues our linked list
      // Forgetting this step will orphan the rest of the nodes in the list
      new_node.next = temp;
    }
  }
}

export default LinkedList;
