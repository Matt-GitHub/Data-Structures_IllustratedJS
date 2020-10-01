import LinkedList from '../Detect_Cycle';

describe('testing the detect cycle functionality of linked list', () => {
  test('detect cycle of an empty linked list returns false', () => {
    let LL = new LinkedList();
    expect(LL.detectCycle()).toBe(false);
  });

  test('detect cycle of a linked list with 1 node and no cycle should return false', () => {
    let LL = new LinkedList();
    LL.insertTail('firstValue');
    expect(LL.detectCycle()).toBe(false);
  });

  test('detect cycle of a linked list with 1 node and a cycle should return true', () => {
    let LL = new LinkedList();
    LL.insertTail('firstValue');
    LL.tail.next = LL.head;
    expect(LL.detectCycle()).toBe(true);
  });

  test('detect cycle of a linked list with 2 nodes and no cycle returns false', () => {
    let LL = new LinkedList();
    LL.insertTail('firstValue');
    LL.insertTail('secondValue');
    expect(LL.detectCycle()).toBe(false);
  });

  test('detect cycle of a linked list with 4 nodes and a cycle should return true', () => {
    let LL = new LinkedList();
    LL.insertTail('firstValue');
    LL.insertTail('secondValue');
    LL.insertTail('thirdValue');
    LL.insertTail('fourthValue');
    LL.tail.next = LL.head;
    expect(LL.detectCycle()).toBe(true);
  });

  test('detect cycle of a linked list with 4 nodes and a cycle in the middle should return true', () => {
    let LL = new LinkedList();
    LL.insertTail('firstValue');
    LL.insertTail('secondValue');
    LL.insertTail('thirdValue');
    LL.insertTail('fourthValue');
    LL.tail.next = LL.head.next;
    expect(LL.detectCycle()).toBe(true);
  });

  test('detect cycle of a linked list with 5 nodes and a cycle in the middle should return true', () => {
    let LL = new LinkedList();
    LL.insertTail('firstValue');
    LL.insertTail('secondValue');
    LL.insertTail('thirdValue');
    LL.insertTail('fourthValue');
    LL.insertTail('fifthValue');
    LL.tail.next = LL.head.next.next;
    expect(LL.detectCycle()).toBe(true);
  });
});
