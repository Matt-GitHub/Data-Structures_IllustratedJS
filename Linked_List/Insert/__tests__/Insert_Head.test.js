import LinkedList from '../Insert_Head';

describe('testing insert head functionality of linked list', () => {
  test('initalization of linked list should result in head and tail being null', () => {
    let LL = new LinkedList();
    expect(LL.head && LL.tail).toBe(null);
  });
  test('insertHead of empty linked list', () => {
    let LL = new LinkedList();
    LL.insertHead('firstValue');
    expect(LL.head.value).toBe('firstValue');
    expect(LL.tail.value).toBe('firstValue');
    expect(LL.head.next && LL.tail.next).toBe(null);
    expect(LL.head.value || LL.tail.value).not.toBe(null);
  });
  test('insertHead of linked list with 1 node in list', () => {
    let LL = new LinkedList();
    LL.insertHead('firstValue');
    LL.insertHead('secondValue');
    expect(LL.head.value).toBe('secondValue');
    expect(LL.tail.value).toBe('firstValue');
    expect(LL.head.next.value).toBe('firstValue');
    expect(LL.tail.next).toBe(null);
  });
  test('insertHead of linked list with multiple nodes in list', () => {
    let LL = new LinkedList();
    LL.insertHead('firstValue');
    LL.insertHead('secondValue');
    LL.insertHead('thirdValue');
    expect(LL.head.value).toBe('thirdValue');
    expect(LL.head.next.value).toBe('secondValue');
    expect(LL.tail.value).toBe('firstValue');
    expect(LL.tail.next).toBe(null);
  });
});
