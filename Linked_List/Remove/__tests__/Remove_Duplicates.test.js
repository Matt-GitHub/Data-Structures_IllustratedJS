import LinkedList from '../Remove_Duplicates';

describe('testing remove duplicates functionality of linked list', () => {
  test('removing duplicates from an empty linked list returns null', () => {
    let LL = new LinkedList();
    expect(LL.removeDuplicates()).toBe(null);
  });

  test('removing duplicates from an linked list with 1 node returns the head node', () => {
    let LL = new LinkedList();
    LL.insertTail('firstValue');
    let newLinkedList = LL.removeDuplicates();
    expect(newLinkedList.value).toBe('firstValue');
  });

  test('removing duplicates from an linked list with 2 nodes and no duplicates should return the original linked list', () => {
    let LL = new LinkedList();
    LL.insertTail('firstValue');
    LL.insertTail('secondValue');
    let newLinkedList = LL.removeDuplicates();
    expect(newLinkedList.value).toBe('firstValue');
    expect(newLinkedList.next.value).toBe('secondValue');
    expect(newLinkedList.next.next).toBeNull();
  });

  test('removing duplicates from an linked list with 2 nodes and 1 duplicate should return the head node', () => {
    let LL = new LinkedList();
    LL.insertTail('firstValue');
    LL.insertTail('firstValue');
    let newLinkedList = LL.removeDuplicates();
    expect(newLinkedList.value).toBe('firstValue');
    expect(newLinkedList.next).toBeNull();
  });

  test('removing duplicates from an linked list with 5 nodes and 2 duplicate should return the 3 nodes', () => {
    let LL = new LinkedList();
    LL.insertTail('firstValue');
    LL.insertTail('firstValue');
    LL.insertTail('secondValue');
    LL.insertTail('secondValue');
    LL.insertTail('thirdValue');
    let newLinkedList = LL.removeDuplicates();
    expect(newLinkedList.value).toBe('firstValue');
    expect(newLinkedList.next.value).toBe('secondValue');
    expect(newLinkedList.next.next.value).toBe('thirdValue');
    expect(newLinkedList.next.next.next).toBeNull();
  });

  test('removing duplicates from an linked list with 5 nodes and 3 duplicate should return the 3 nodes', () => {
    let LL = new LinkedList();
    LL.insertTail('firstValue');
    LL.insertTail('secondValue');
    LL.insertTail('thirdValue');
    LL.insertTail('thirdValue');
    LL.insertTail('thirdValue');
    let newLinkedList = LL.removeDuplicates();
    expect(newLinkedList.value).toBe('firstValue');
    expect(newLinkedList.next.value).toBe('secondValue');
    expect(newLinkedList.next.next.value).toBe('thirdValue');
    expect(newLinkedList.next.next.next).toBeNull();
  });
});
