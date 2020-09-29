import LinkedList from '../Remove_Kth_Index_From_End';

describe('testing remove Kth index from end functionality of linked list', () => {
  test('initialization of linked list should result in head and tail being null', () => {
    let LL = new LinkedList();
    expect(LL.head && LL.tail).toBe(null);
  });

  test('removing the kth index from an empty linked list should throw an error', () => {
    let LL = new LinkedList();
    expect(() => LL.removeKthIndexFromEnd(0)).toThrow(Error);
  });

  test('removing the kth index from end with only 1 node in linked list should result in a null head and tail', () => {
    let LL = new LinkedList();
    LL.insertHead('firstValue');
    LL.removeKthIndexFromEnd(1);
    expect(LL.head && LL.tail).toBeNull();
  });

  test('removing the 2 index from end with 3 nodes should remove the middle node', () => {
    let LL = new LinkedList();
    LL.insertHead('thirdValue');
    LL.insertHead('secondValue');
    LL.insertHead('firstValue');
    LL.removeKthIndexFromEnd(2);
    expect(LL.head.value).toBe('firstValue');
    expect(LL.head.next.value).toBe('thirdValue');
    expect(LL.tail.value).toBe('thirdValue');
    expect(LL.tail.next).toBeNull();
  });

  test('removing the 4th index from end with 4 nodes should result in the head node being changed', () => {
    let LL = new LinkedList();
    LL.insertHead('fourthValue');
    LL.insertHead('thirdValue');
    LL.insertHead('secondValue');
    LL.insertHead('firstValue');
    LL.removeKthIndexFromEnd(4);
    expect(LL.head.value).toBe('secondValue');
    expect(LL.head.next.value).toBe('thirdValue');
    expect(LL.tail.value).toBe('fourthValue');
    expect(LL.tail.next).toBeNull();
  });

  test('removing the 100th index from end with 1 node in the linked list should throw an error', () => {
    let LL = new LinkedList();
    LL.insertHead('firstValue');
    expect(() => LL.removeKthIndexFromEnd(100)).toThrow(Error);
  });

  test('removing the 1st index from end with 4 nodes should remove the node before the tail', () => {
    let LL = new LinkedList();
    LL.insertHead('fourthValue');
    LL.insertHead('thirdValue');
    LL.insertHead('secondValue');
    LL.insertHead('firstValue');
    LL.removeKthIndexFromEnd(2);
    console.log(
      'head',
      LL.head.value,
      'next',
      LL.head.next.value,
      'next',
      LL.head.next.next
    );
    expect(LL.head.value).toBe('firstValue');
    expect(LL.head.next.value).toBe('secondValue');
    expect(LL.head.next.next.value).toBe('fourthValue');
    expect(LL.tail.value).toBe('fourthValue');
    expect(LL.tail.next).toBeNull();
  });
});
