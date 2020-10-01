import LinkedList from '../Reverse_Linked_List';
import compareLinkedList from '../Compare_Linked_List';

describe('testing compare functionality of linked list', () => {
  test('comparing 2 empty linked list should return false', () => {
    let LL1 = new LinkedList();
    let LL2 = new LinkedList();
    expect(compareLinkedList(LL1, LL2)).toBe(true);
  });

  test('comparing 2 linked list with 1 empty list should return false', () => {
    let LL1 = new LinkedList();
    let LL2 = new LinkedList();
    LL1.insertTail('firstValue');
    expect(compareLinkedList(LL1, LL2)).toBe(false);
  });

  test('comparing 2 linked list with 1 identical node should return true', () => {
    let LL1 = new LinkedList();
    let LL2 = new LinkedList();
    LL1.insertTail('firstValue');
    LL2.insertTail('firstValue');
    expect(compareLinkedList(LL1, LL2)).toBe(true);
  });

  test('comparing 2 linked list with non matching nodes should return false', () => {
    let LL1 = new LinkedList();
    let LL2 = new LinkedList();
    LL1.insertTail('firstValue');
    LL2.insertTail('differentValue');
    expect(compareLinkedList(LL1, LL2)).toBe(false);
  });

  test('comparing 2 linked list with matching nodes but different lengths should return false', () => {
    let LL1 = new LinkedList();
    let LL2 = new LinkedList();
    LL1.insertTail('firstValue');
    LL1.insertTail('secondValue');
    LL1.insertTail('thirdValue');
    LL2.insertTail('firstValue');
    LL2.insertTail('secondValue');
    LL2.insertTail('thirdValue');
    LL2.insertTail('differentValue');
    expect(compareLinkedList(LL1, LL2)).toBe(false);
  });
});
