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
  // The index represents the position in the linked list we will insert the node at
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
        throw new Error('Index out of range');
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
    // We need to traverse the linked list until we get to the index we are looking for
    // Track the current index, current node and previous node
    let currentIndex = 0;
    let current = this.head;
    let previous = null;
    // While the current index is less than the index we are looking for
    while (currentIndex < index) {
      // If the current node is null we are looking for an index that does not exist inside of our linked list
      // Throw an error
      if (current === null) {
        throw new Error('Index is out of range');
      } else {
        // Else
        // Set previous to equal the current node
        // Set current to equal the next node in the linked list
        // Increment the current index
        previous = current;
        current = current.next;
        currentIndex++;
      }
    }
    // We have found the index in our linked list
    // 2 possibilities exist
    // The index is somewhere in the middle of our linked list
    // Or the index will be creating a new tail node
    // If the current node is null (meaning we are inserting at the tail)
    // Update the tail value
    if (current === null) {
      // Set the previous nodes next value to equal the new node
      // Set the new nodes next value to equal current
      // Update the new node to equal the tail
      previous.next = new_node;
      new_node.next = current;
      this.tail = new_node;
    } else {
      // Set the previous nodes next value to equal the new node
      // Set the new nodes next value to equal current
      previous.next = new_node;
      new_node.next = current;
    }
  }
}

export default LinkedList;
