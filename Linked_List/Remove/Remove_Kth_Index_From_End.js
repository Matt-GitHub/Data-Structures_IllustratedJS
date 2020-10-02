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

  // Remove Kth Index From End takes 1 parameter -> Index
  // This will remove the position x values away from the tail node
  removeKthIndexFromEnd(index) {
    // If the linked list is empty
    // Throw an error
    if (this.head === null) {
      throw new Error('linked list is empty');
    }
    // We need to track 3 values: finder, current and current index
    // Finder is going to seek out the value in the linked list that is x spots away from the head node
    // Current index is going to keep track of how many nodes we have moved until we get to that spot
    let finder = this.head;
    let current = this.head;
    let currentIndex = 1;
    // Iterate over the linked list until we are x nodes away
    while (currentIndex <= index) {
      // If the value of finder is null that means the index we are looking for
      // Is greater than the amount of nodes in the linked list
      // Throw an error
      if (finder === null) {
        throw new Error('Index is out of range');
      }
      // If finder is not null
      // Continue iterating over the linked list
      // Increment the current index
      // Set finder to equal the next node in the linked list
      currentIndex++;
      finder = finder.next;
    }
    // We need a specific case for when the node we are removing is the head node
    // In this instance finder will equal null
    // If finder is equal to null we need to set the head node to equal the node after it
    // Set the head node to equal the next node in the linked list
    // This will set the head node to either equal the next node or null
    if (finder === null) {
      this.head = this.head.next;
      return;
    }

    // We now have everything in place but we need to find out which value to remove
    // Iterate over the linked list until we get to the last node
    while (finder.next !== null) {
      // Set finder to equal the next node in the linked list
      // Set current to equal the next node in the linked list
      finder = finder.next;
      current = current.next;
    }
    // At this point current is equal to the node before the one we need to remove
    // Set the current's next value to equal 2 nodes ahead in the linked list
    // This will remove the node directly after it
    current.next = current.next.next;
  }
}

export default LinkedList;
