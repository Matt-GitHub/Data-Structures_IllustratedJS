import LinkedList from '../Insert_Kth_Index';

describe('testing insert at Kth index functionality of linked list', () => {
  test('initialization of linked list should result in head and tail being null', () => {
    let LL = new LinkedList();
    expect(LL.head && LL.tail).toBe(null);
  });

  test('insert at (Index of 2) with an empty linked list should return an error', () => {
    let LL = new LinkedList();
    expect(() => LL.insertAtKthIndex('firstValue', 2)).toThrow(Error);
  });

  test('insert at (Index of 0) with an empty linked list should insert values of head and tail', () => {
    let LL = new LinkedList();
    LL.insertAtKthIndex('firstValue', 0);
    expect(LL.head.value && LL.tail.value).toBe('firstValue');
    expect(LL.tail.next).toBeNull();
  });

  test('insert at (Index of 0) with a linked list that already has a head node should update head node to equal the new node', () => {
    let LL = new LinkedList();
    LL.insertHead('firstNode');
    LL.insertAtKthIndex('newFirstNode', 0);
    expect(LL.head.value).toBe('newFirstNode');
    expect(LL.head.next.value).toBe('firstNode');
    expect(LL.tail.value).toBe('firstNode');
    expect(LL.tail.next).toBeNull();
  });

  test('insert at (Index of 1), which is a middle-ish index of the linked list, should update the index to be the new node', () => {
    let LL = new LinkedList();
    LL.insertHead('thirdValue');
    LL.insertHead('secondValue');
    LL.insertHead('firstValue');
    LL.insertAtKthIndex('insertValue', 1);
    expect(LL.head.value).toBe('firstValue');
    expect(LL.head.next.value).toBe('insertValue');
    expect(LL.head.next.next.value).toBe('secondValue');
    expect(LL.tail.value).toBe('thirdValue');
    expect(LL.tail.next).toBeNull();
  });

  test('insert value at Index (1), which is the current tail node, tail should remain the same and previous should be the new node', () => {
    let LL = new LinkedList();
    LL.insertHead('lastValue');
    LL.insertHead('firstValue');
    LL.insertAtKthIndex('insertValue', 1);
    expect(LL.head.value).toBe('firstValue');
    expect(LL.head.next.value).toBe('insertValue');
    expect(LL.tail.value).toBe('lastValue');
    expect(LL.tail.next).toBeNull();
  });

  test('insert value at the (Index of 2) which is currently null, new node should be the new tail node and point to null', () => {
    let LL = new LinkedList();
    LL.insertHead('secondValue');
    LL.insertHead('firstValue');
    LL.insertAtKthIndex('thirdValue', 2);
    expect(LL.head.value).toBe('firstValue');
    expect(LL.head.next.value).toBe('secondValue');
    expect(LL.tail.value).toBe('thirdValue');
    expect(LL.tail.next).toBeNull();
  });

  test('Insert value at Index (100) which is out of range, should return an error', () => {
    let LL = new LinkedList();
    expect(() => LL.insertAtKthIndex('newValue', 100)).toThrow(Error);
  });
});
