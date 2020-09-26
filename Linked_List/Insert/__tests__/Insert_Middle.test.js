import LinkedList from '../Insert_Middle';

describe('testing insert tail functionality of linked list', () => {
  test('initialization of linked list should result in head and tail being null', () => {
    let LL = new LinkedList();
    expect(LL.head && LL.tail).toBe(null);
  });

  test('insert middle with no nodes should return an error', () => {
    let LL = new LinkedList();
    expect(() => LL.insertMiddle('firstValue')).toThrow(Error);
  });

  test('insert middle with only 1 node should return an error', () => {
    let LL = new LinkedList();
    LL.insertHead('firstNode');
    expect(() => LL.insertMiddle('middleNode')).toThrow(Error);
  });

  test('insert middle with (even number of nodes) 2 nodes should result in the new node becoming the middle node', () => {
    let LL = new LinkedList();
    LL.insertHead('lastNode');
    LL.insertHead('firstNode');
    LL.insertMiddle('middleNode');
    expect(LL.head.value).toBe('firstNode');
    expect(LL.head.next.value).toBe('middleNode');
    expect(LL.tail.value).toBe('lastNode');
    expect(LL.tail.next).toBeNull();
  });

  test('insert middle with (odd number of nodes) 3 nodes should result in the new node becoming the middle + 1 node', () => {
    let LL = new LinkedList();
    LL.insertHead('lastNode');
    LL.insertHead('oldMiddleNode');
    LL.insertHead('firstNode');
    LL.insertMiddle('newMiddleNode');
    expect(LL.head.value).toBe('firstNode');
    expect(LL.head.next.value).toBe('oldMiddleNode');
    expect(LL.head.next.next.value).toBe('newMiddleNode');
    expect(LL.tail.value).toBe('lastNode');
    expect(LL.tail.next).toBeNull();
  });
  // test('insertTail of empty linked list should result in head and tail having the same value', () => {
  //   let LL = new LinkedList();
  //   LL.insertTail('firstValue');
  //   expect(LL.head.value).toBe('firstValue');
  //   expect(LL.tail.value).toBe('firstValue');
  //   expect(LL.head.next && LL.tail.next).toBe(null);
  // });

  // test('insertTail of linked list with 1 node should result in tail being the new value added', () => {
  //   let LL = new LinkedList();
  //   LL.insertTail('firstValue');
  //   LL.insertTail('secondValue');
  //   expect(LL.head.value).toBe('firstValue');
  //   expect(LL.head.next.value).toBe('secondValue');
  //   expect(LL.tail.value).toBe('secondValue');
  //   expect(LL.tail.next).toBe(null);
  // });

  // test('insertTail of linked list with multiple nodes should result in tail being the new value added', () => {
  //   let LL = new LinkedList();
  //   LL.insertTail('firstValue');
  //   LL.insertTail('secondValue');
  //   LL.insertTail('thirdValue');
  //   expect(LL.head.value).toBe('firstValue');
  //   expect(LL.head.next.value).toBe('secondValue');
  //   expect(LL.tail.value).toBe('thirdValue');
  //   expect(LL.tail.next).toBe(null);
  // });
});
