import LinkedList from '../Reverse_Linked_List';

describe('testing reverse a linked list functionality', () => {
  test('reverse an empty linked list', () => {
    let LL = new LinkedList();
    console.log(LL.reverseLinkedList());
  });
});
