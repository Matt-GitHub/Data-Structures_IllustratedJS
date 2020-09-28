import LinkedList from '../Remove_Head';

describe('testing remove head functionality of linked list', () => {
  test('initialization of linked list should result in head and tail being null', () => {
    let LL = new LinkedList();
    expect(LL.head && LL.tail).toBe(null);
  });

  test('removing the head from an empty linked list should throw an error', () => {
    let LL = new LinkedList();
    expect(() => LL.removeHead()).toThrow(Error);
  });

  test('removing the head node from a linked list with 1 node should return null values', () => {
    let LL = new LinkedList();
    LL.insertHead('firstValue');
    LL.removeHead();
    expect(LL.head && LL.tail).toBeNull();
  });

  test('removing the head node from a linked list with 2 values should return the tail node being the head node', () => {
    let LL = new LinkedList();
    LL.insertHead('secondValue');
    LL.insertHead('firstValue');
    LL.removeHead();
    expect(LL.head.value && LL.tail.value).toBe('secondValue');
    expect(LL.head.next).toBeNull();
  });

  test('removing the head node from a linked list with 3 values should return the proper head and tail node', () => {
    let LL = new LinkedList();
    LL.insertHead('thirdValue');
    LL.insertHead('secondValue');
    LL.insertHead('firstValue');
    LL.removeHead();
    expect(LL.head.value).toBe('secondValue');
    expect(LL.head.next.value).toBe('thirdValue');
    expect(LL.tail.value).toBe('thirdValue');
    expect(LL.tail.next).toBeNull();
  });
});
