import LinkedList from '../Find_Middle';

describe('test find middle functionality of a linked list', () => {
  test('finding the middle node of an empty linked list should throw an error', () => {
    let LL = new LinkedList();
    expect(() => LL.findMiddle()).toThrow(Error);
  });

  test('finding the middle node of a linked list with 1 value should return the head node', () => {
    let LL = new LinkedList();
    LL.insertTail('firstValue');
    expect(LL.findMiddle()).toBe('firstValue');
  });

  test('finding the middle node of a linked list with 2 values should return the tail node', () => {
    let LL = new LinkedList();
    LL.insertTail('firstValue');
    LL.insertTail('secondValue');
    expect(LL.findMiddle()).toBe('secondValue');
  });

  test('finding the middle node of a linked list with 3 values should return the middle value', () => {
    let LL = new LinkedList();
    LL.insertTail('firstValue');
    LL.insertTail('secondValue');
    LL.insertTail('thirdValue');
    expect(LL.findMiddle()).toBe('secondValue');
  });

  test('finding the middle node of a linked list with 4 values should return the second middle value', () => {
    let LL = new LinkedList();
    LL.insertTail('firstValue');
    LL.insertTail('secondValue');
    LL.insertTail('thirdValue');
    LL.insertTail('fourthValue');
    expect(LL.findMiddle()).toBe('thirdValue');
  });
});
