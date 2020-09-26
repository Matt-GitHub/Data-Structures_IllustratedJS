import LinkedList from '../Insert_Tail';

describe('testing insert tail functionality of linked list', () => {
  test('initialization of linked list should result in head and tail being null', () => {
    let LL = new LinkedList();
    expect(LL.head && LL.tail).toBe(null);
  });

  test('insertTail of empty linked list should result in head and tail having the same value', () => {
    let LL = new LinkedList();
    LL.insertTail('firstValue');
    expect(LL.head.value).toBe('firstValue');
    expect(LL.tail.value).toBe('firstValue');
    expect(LL.head.next && LL.tail.next).toBe(null);
  });

  test('insertTail of linked list with 1 node should result in tail being the new value added', () => {
    let LL = new LinkedList();
    LL.insertTail('firstValue');
    LL.insertTail('secondValue');
    expect(LL.head.value).toBe('firstValue');
    expect(LL.head.next.value).toBe('secondValue');
    expect(LL.tail.value).toBe('secondValue');
    expect(LL.tail.next).toBe(null);
  });

  test('insertTail of linked list with multiple nodes should result in tail being the new value added', () => {
    let LL = new LinkedList();
    LL.insertTail('firstValue');
    LL.insertTail('secondValue');
    LL.insertTail('thirdValue');
    expect(LL.head.value).toBe('firstValue');
    expect(LL.head.next.value).toBe('secondValue');
    expect(LL.tail.value).toBe('thirdValue');
    expect(LL.tail.next).toBe(null);
  });
});
