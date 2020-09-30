import LinkedList from '../Find_Length';

describe('testing find length functionality of linked list', () => {
  test('the length of an empty linked list returns 0', () => {
    let LL = new LinkedList();
    expect(LL.findLength()).toBe(0);
  });

  test('the length of a linked list with 1 node returns 1', () => {
    let LL = new LinkedList();
    LL.insertTail('value');
    expect(LL.findLength()).toBe(1);
  });

  test('the length of a linked list with 5 nodes returns 5', () => {
    let LL = new LinkedList();
    LL.insertTail('value');
    LL.insertTail('value');
    LL.insertTail('value');
    LL.insertTail('value');
    LL.insertTail('value');
    expect(LL.findLength()).toBe(5);
  });
});
