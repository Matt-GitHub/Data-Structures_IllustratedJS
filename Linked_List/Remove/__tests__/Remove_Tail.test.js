import LinkedList from '../Remove_Tail';

describe('testing remove head functionality of linked list', () => {
  test('initialization of linked list should result in head and tail being null', () => {
    let LL = new LinkedList();
    expect(LL.head && LL.tail).toBe(null);
  });

  test('removing the tail from an empty linked list should throw an error', () => {
    let LL = new LinkedList();
    expect(() => LL.removeTail()).toThrow(Error);
  });

  test('removing the tail from a linked list with 1 node should result in an empty linked list', () => {
    let LL = new LinkedList();
    LL.insertTail('firstValue');
    LL.removeTail();
    expect(LL.head && LL.tail).toBeNull();
  });

  test('removing the tail from a linked list with 2 nodes should result in the head node also becoming the tail node', () => {
    let LL = new LinkedList();
    LL.insertTail('firstValue');
    LL.insertTail('secondValue');
    LL.removeTail();
    expect(LL.head.value && LL.tail.value).toBe('firstValue');
    expect(LL.tail.next).toBeNull();
  });

  test('removing the tail from a linked list with 3 nodes should result in the middle node becoming the tail node', () => {
    let LL = new LinkedList();
    LL.insertTail('firstValue');
    LL.insertTail('secondValue');
    LL.insertTail('thirdValue');
    LL.removeTail();
    expect(LL.head.value).toBe('firstValue');
    expect(LL.head.next.value).toBe('secondValue');
    expect(LL.tail.value).toBe('secondValue');
    expect(LL.tail.next).toBeNull();
  });
});
