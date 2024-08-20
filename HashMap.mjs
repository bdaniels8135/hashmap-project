class HashMap {
  hash(key) {
    const primeNumber = 31;
    return key
      .split("")
      .reduce((acc, val) => acc * primeNumber + val.charCodeAt(0), 0);
  }

  set(key, value) {}

  get(key) {}

  has(key) {}

  remove(key) {}

  length() {}

  clear() {}

  keys() {}

  values() {}

  entries() {}
}

export default HashMap;
