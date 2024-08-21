import Node from "./Node.mjs";

export default class HashLinkedList {
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
    if (this.#head == null) return false;
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
    while (currentNode.key != key && currentNode.nextNode != null) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    if (currentNode.key != key) return this;
    if (!prevNode) this.#head = currentNode.nextNode;
    else prevNode.nextNode = currentNode.nextNode;
    this.#size -= 1;
    if (currentNode.nextNode == null && !!prevNode) this.#tail = prevNode;
    else this.#tail = null;
    return this;
  }

  update(key, newValue) {
    let currentNode = this.#head;
    while (currentNode.nextNode != null) {
      if (currentNode.key === key) {
        currentNode.value = newValue;
        return this;
      }
      currentNode = currentNode.nextNode;
    }
    if (currentNode.key === key) {
      currentNode.value = newValue;
      return this;
    }
  }

  get keys() {
    const keys = [];
    if (this.#head == null) return keys;
    let currentNode = this.#head;
    while (currentNode.nextNode != null) {
      keys.push(currentNode.key);
      currentNode = currentNode.nextNode;
    }
    keys.push(currentNode.key);
    return keys;
  }

  get values() {
    const values = [];
    if (this.#head == null) return values;
    let currentNode = this.#head;
    while (currentNode.nextNode != null) {
      values.push(currentNode.value);
      currentNode = currentNode.nextNode;
    }
    values.push(currentNode.value);
    return values;
  }

  get entries() {
    const entries = [];
    if (this.#head == null) return entries;
    let currentNode = this.#head;
    while (currentNode.nextNode != null) {
      entries.push([currentNode.key, currentNode.value]);
      currentNode = currentNode.nextNode;
    }
    entries.push([currentNode.key, currentNode.value]);
    return entries;
  }
}
