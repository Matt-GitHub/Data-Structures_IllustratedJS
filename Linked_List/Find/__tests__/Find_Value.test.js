import LinkedList from '../Find_Value';

describe('test find if value exists in linked list functionality', () => {
  test('find if value exists with empty linked list should return false', () => {
    let LL = new LinkedList();
    expect(LL.findValue(1)).toBe(false);
  });

  test('find if value exists with a linked list with 1 node that does not match should return false', () => {
    let LL = new LinkedList();
    LL.insertHead(1);
    expect(LL.findValue(2)).toBe(false);
  });

  test('find if value exists with a linked list with 1 node that matches should return true', () => {
    let LL = new LinkedList();
    LL.insertHead(1);
    expect(LL.findValue(1)).toBe(true);
  });

  test('find if value exists with a linked list with 5 nodes that does not match should return false', () => {
    let LL = new LinkedList();
    LL.insertHead(4);
    LL.insertHead(3);
    LL.insertHead(2);
    LL.insertHead(1);
    LL.insertHead(0);
    expect(LL.findValue(100)).toBe(false);
  });

  test('find if value exists with a linked list with 5 nodes that does match should return true', () => {
    let LL = new LinkedList();
    LL.insertHead(4);
    LL.insertHead(3);
    LL.insertHead(2);
    LL.insertHead(1);
    LL.insertHead(0);
    expect(LL.findValue(3)).toBe(true);
  });

  test('find if value exists where the value is the tail node, should return true', () => {
    let LL = new LinkedList();
    LL.insertHead(5);
    LL.insertHead(4);
    LL.insertHead(3);
    LL.insertHead(2);
    LL.insertHead(1);
    LL.insertHead(0);
    expect(LL.findValue(5)).toBe(true);
  });
});
