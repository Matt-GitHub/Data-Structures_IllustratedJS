import LinkedList from '../Reverse_Linked_List';

describe('testing reverse a linked list functionality', () => {
  test('reverse an empty linked list', () => {
    let LL = new LinkedList();
    expect(() => LL.reverseLinkedList()).toThrow(Error);
  });

  test('reverse a linked list with 1 value should return the same value and a next value of null', () => {
    let LL = new LinkedList();
    LL.insertTail('firstValue');
    let answer = LL.reverseLinkedList();
    expect(answer.value).toBe('firstValue');
    expect(answer.next).toBeNull();
  });

  test('reverse a linked list with 2 values should return the tail value and the correct next value', () => {
    let LL = new LinkedList();
    LL.insertTail('firstValue');
    LL.insertTail('secondValue');
    let answer = LL.reverseLinkedList();
    expect(answer.value).toBe('secondValue');
    expect(answer.next.value).toBe('firstValue');
  });

  test('reverse a linked list with 6 values should return the tail value and the correct next value', () => {
    let LL = new LinkedList();
    LL.insertTail('firstValue');
    LL.insertTail('secondValue');
    LL.insertTail('thirdValue');
    LL.insertTail('fourthValue');
    LL.insertTail('fifthValue');
    LL.insertTail('sixthValue');
    let answer = LL.reverseLinkedList();
    expect(answer.value).toBe('sixthValue');
    expect(answer.next.value).toBe('fifthValue');
  });
});
