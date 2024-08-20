import HashLinkedList from "./HashLinkedList.mjs";

export default class HashMap {
  #length;

  #numBuckets;

  #loadFactor;

  #data;

  constructor(numBuckets = 16, loadFactor = 0.8) {
    this.#length = 0;
    this.#numBuckets = numBuckets;
    this.#loadFactor = loadFactor;
    this.#data = [...Array(this.#numBuckets)].map(() => new HashLinkedList());
  }

  #hash(key) {
    return key
      .split("")
      .reduce(
        (acc, val) => (acc * 31 + val.charCodeAt(0)) % this.#numBuckets,
        0
      );
  }

  set(key, value) {}

  get(key) {}

  has(key) {}

  remove(key) {}

  get length() {
    return this.#length;
  }

  clear() {}

  keys() {}

  values() {}

  entries() {}
}
