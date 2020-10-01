function compareLinkedList(llist1, llist2) {
  let current = llist1.head;
  let curr = llist2.head;
  if (current === null && curr === null) return true;
  if (current === null || curr === null) return false;

  while (curr !== null && current !== null) {
    if (curr.value !== current.value) return false;
    current = current.next;
    curr = curr.next;
  }

  return current === null && curr === null;
}

export default compareLinkedList;
