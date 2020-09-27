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
  // Function accepts 2 parameters => Value and Index
  // The value represents the value we pass into the node
  // The index represents the position in the index we will insert the node
  insertAtKthIndex(value, index) {
    // Create the new node value and assign it to a variable
    // To create our node we must use our Node class
    // Our Node class accepts 1 value => value
    // Initialize our newNode by using => new
    let new_node = new Node(value);
    // Determine if the linked list is empty
    // If TRUE
    if (this.head === null) {
      // Now that we know the linked list is empty we have to handle 1 edge case
      // is the index valid?
      // A valid index for an empty linked list is 0
      if (index !== 0) {
        // The index is not 0
        // This means the index is out of range
        // Throw an error
        throw new Error('Linked List is empty');
      } else {
        // The linked list is empty and the index is 0
        // This is an insert head function
        // Set the head and tail node to the new node
        // Return
        this.head = new_node;
        this.tail = new_node;
        return;
      }
    }
    // The next case we need to handle is the ability to insert at index of 0 when the linked list is not empty
    // If the head is not null and index === 0
    if (this.head !== null && index === 0) {
      // Store the current head as a temp variable
      let temp = this.head;
      // Reassign the head node to equal => newNode
      this.head = newNode;
      // Set the new head's next value => old head (temp)
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

export default LinkedList;
