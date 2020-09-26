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

  // Create function for inserting a value to the head of the linked list
  // Accepts 1 parameter => value
  insertHead(value) {
    // Create the new node value and assign it to a variable
    // To create our node we must use our Node class
    // Our Node class accepts 1 value => value
    // Initialize our newNode by using => new
    let newNode = new Node(value);
    // Determine if the linked list is empty
    // If TRUE
    if (this.head === null) {
      // Set head to new node
      this.head = newNode;
      // Set tail to new node
      this.tail = newNode;
      // If FALSE
    } else {
      // Store the current head as a temp variable
      let temp = this.head;
      // Reassign the head node to equal => newNode
      this.head = newNode;
      // Set the new head's next value => old head (temp)
      this.head.next = temp;
    }
  }
}

export default LinkedList;
