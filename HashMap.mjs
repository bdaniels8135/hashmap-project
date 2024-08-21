import HashLinkedList from "./HashLinkedList.mjs";

export default class HashMap {
  #length;

  #numBuckets;

  #loadFactor;

  #data;

  constructor(numBuckets = 16, loadFactor = 0.75) {
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

  #reallocate() {
    const entries = this.entries;
    this.#numBuckets *= 2;
    this.clear();
    entries.forEach((entry) => {
      const [key, value] = entry;
      this.set(key, value);
    });
  }

  set(key, value) {
    let bucket = this.#data[this.#hash(key)];
    if (bucket.contains(key)) {
      bucket.update(key, value);
      return this;
    }
    this.#length += 1;
    if (this.#length / this.#numBuckets > this.#loadFactor) {
      this.#reallocate();
      bucket = this.#data[this.#hash(key)];
    }
    bucket.append(key, value);
    return this;
  }

  get(key) {
    const bucket = this.#data[this.#hash(key)];
    return bucket.getValue(key);
  }

  has(key) {
    const bucket = this.#data[this.#hash(key)];
    return bucket.contains(key);
  }

  remove(key) {
    const bucket = this.#data[this.#hash(key)];
    if (!bucket.contains(key)) return false;
    this.#length -= 1;
    bucket.remove(key);
    return true;
  }

  get length() {
    return this.#length;
  }

  clear() {
    this.#data = [...Array(this.#numBuckets)].map(() => new HashLinkedList());
    this.#length = 0;
    return this;
  }

  get keys() {
    return this.#data.flatMap((bucket) => bucket.keys);
  }

  get values() {
    return this.#data.flatMap((bucket) => bucket.values);
  }

  get entries() {
    return this.#data.flatMap((bucket) => bucket.entries);
  }
}
