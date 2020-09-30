import LinkedList from '../Find_Kth_Value';

describe('testing find Kth value functionality for linked list', () => {
  test('finding the 2nd value of an empty linked list should throw an error', () => {
    let LL = new LinkedList();
    expect(() => LL.findKthValue(2)).toThrow(Error);
  });

  test('finding the 2nd value of a linked list with 1 node should throw an error', () => {
    let LL = new LinkedList();
    LL.insertHead('firstValue');
    expect(() => LL.findKthValue(2)).toThrow(Error);
  });

  test('finding the 1st value of a linked list with 1 node should return the head node', () => {
    let LL = new LinkedList();
    LL.insertHead('firstValue');
    expect(LL.findKthValue(0)).toBe('firstValue');
  });

  test('find the last value of a linked list with 3 nodes should return the tail node', () => {
    let LL = new LinkedList();
    LL.insertHead('thirdValue');
    LL.insertHead('secondValue');
    LL.insertHead('firstValue');
    expect(LL.findKthValue(2)).toBe('thirdValue');
  });

  test('find the 2nd value of a linked list with 3 nodes should return the middle node', () => {
    let LL = new LinkedList();
    LL.insertHead('thirdValue');
    LL.insertHead('secondValue');
    LL.insertHead('firstValue');
    expect(LL.findKthValue(1)).toBe('secondValue');
  });
});
