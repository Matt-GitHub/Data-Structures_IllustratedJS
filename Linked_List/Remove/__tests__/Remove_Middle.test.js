import LinkedList from '../Remove_Middle';

describe('testing remove head functionality of linked list', () => {
  test('initialization of linked list should result in head and tail being null', () => {
    let LL = new LinkedList();
    expect(LL.head && LL.tail).toBe(null);
  });

  test('removing the middle from an empty linked list should throw an error', () => {
    let LL = new LinkedList();
    expect(() => LL.removeMiddle()).toThrow(Error);
  });

  test('removing the middle node from a linked list with 1 node sets the head and tail node to null', () => {
    let LL = new LinkedList();
    LL.insertTail('firstValue');
    LL.removeMiddle();
    expect(LL.head && LL.tail).toBeNull();
    expect(LL.head && LL.tail).toBeNull();
  });

  test('removing the middle node from a linked list with 2 values removes the tail node', () => {
    let LL = new LinkedList();
    LL.insertTail('firstValue');
    LL.insertTail('secondValue');
    LL.removeMiddle();
    expect(LL.head.value && LL.tail.value).toBe('firstValue');
    expect(LL.tail.next).toBeNull();
  });

  test('removing middle from an odd number of values in linked list should result in the middle node being removed', () => {
    let LL = new LinkedList();
    LL.insertTail('firstValue');
    LL.insertTail('secondValue');
    LL.insertTail('thirdValue');
    LL.removeMiddle();
    expect(LL.head.value).toBe('firstValue');
    expect(LL.head.next.value).toBe('thirdValue');
    expect(LL.tail.value).toBe('thirdValue');
    expect(LL.tail.next).toBeNull();
  });

  test('remove middle node from even number of values in linked list should result in the second middle number being removed', () => {
    let LL = new LinkedList();
    LL.insertTail('firstValue');
    LL.insertTail('secondValue');
    LL.insertTail('thirdValue');
    LL.insertTail('fourthValue');
    LL.removeMiddle();
    expect(LL.head.value).toBe('firstValue');
    expect(LL.head.next.value).toBe('secondValue');
    expect(LL.head.next.next.value).toBe('fourthValue');
    expect(LL.tail.value).toBe('fourthValue');
    expect(LL.tail.next).toBeNull();
  });
});
