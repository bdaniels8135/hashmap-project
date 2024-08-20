import Node from "./Node.mjs";

class HashLinkedList {
  #head;

  #tail;

  #size;

  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#size = 0;
  }

  get size() {
    return this.#size;
  }

  append(key, value) {
    const newNode = new Node(key, value, null);
    if (this.#tail != null) this.#tail.nextNode = newNode;
    this.#tail = newNode;
    if (this.#head == null) this.#head = newNode;
    this.#size += 1;
    return this;
  }

  getValue(key) {
    let currentNode = this.#head;
    while (currentNode.nextNode != null) {
      if (currentNode.key === key) return currentNode.value;
      currentNode = currentNode.nextNode;
    }
    return currentNode.key === key ? currentNode.value : null;
  }

  contains(key) {
    let currentNode = this.#head;
    while (currentNode.nextNode != null) {
      if (currentNode.key === key) return true;
      currentNode = currentNode.nextNode;
    }
    return currentNode.key === key;
  }

  remove(key) {
    let prevNode;
    let currentNode = this.#head;
    while (currentNode.key != key || currentNode.nextNode != null) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    if (currentNode.key != key) return this;
    prevNode.nextNode = currentNode.nextNode;
    this.#size -= 1;
    if (prevNode.nextNode == null) this.#tail = prevNode;
    return this;
  }
}

export default HashLinkedList;
