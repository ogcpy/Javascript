class HashMap {
  constructor(loadFactor = 0.75, initialCapacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = initialCapacity;
    this.buckets = Array.from({ length: this.capacity }, () => []);
    this.size = 0;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    const bucket = this.buckets[index];
    for (const entry of bucket) {
      if (entry.key === key) {
        entry.value = value; // Update existing key
        return;
      }
    }

    // Add new entry
    bucket.push({ key, value });
    this.size++;

    // Check if resize is needed
    if (this.size / this.capacity >= this.loadFactor) {
      this.resize();
    }
  }

  resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = Array.from({ length: this.capacity }, () => []);
    this.size = 0;

    // Rehash all entries
    for (const bucket of oldBuckets) {
      for (const entry of bucket) {
        this.set(entry.key, entry.value);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    for (const entry of bucket) {
      if (entry.key === key) return entry.value;
    }
    return null;
  }

  has(key) {
    return this.get(key) !== null;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const entryIndex = bucket.findIndex((entry) => entry.key === key);
    if (entryIndex === -1) return false;
    bucket.splice(entryIndex, 1);
    this.size--;
    return true;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = Array.from({ length: this.capacity }, () => []);
    this.size = 0;
  }

  keys() {
    const keys = [];
    for (const bucket of this.buckets) {
      for (const entry of bucket) {
        keys.push(entry.key);
      }
    }
    return keys;
  }

  values() {
    const values = [];
    for (const bucket of this.buckets) {
      for (const entry of bucket) {
        values.push(entry.value);
      }
    }
    return values;
  }

  entries() {
    const entries = [];
    for (const bucket of this.buckets) {
      for (const entry of bucket) {
        entries.push([entry.key, entry.value]);
      }
    }
    return entries;
  }
}

class HashSet extends HashMap {
  constructor(loadFactor = 0.75, initialCapacity = 16) {
    super(loadFactor, initialCapacity);
  }

  add(key) {
    super.set(key, true); // Value is irrelevant; we only track keys
  }

  has(key) {
    return super.has(key);
  }

  remove(key) {
    return super.remove(key);
  }

  entries() {
    return super.keys(); // Return keys only
  }
}

const test = new HashMap(0.75);

// Populate the hash map
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log("Initial Entries:", test.entries());
console.log("Size Before Resize:", test.length()); // 12

// Trigger resize by adding one more entry
test.set("moon", "silver");

console.log("Capacity After Resize:", test.capacity); // 32
console.log("Size After Resize:", test.length()); // 13
console.log("Load Factor After Resize:", test.size / test.capacity); // ~0.406

// Test other methods
console.log("Get 'banana':", test.get("banana")); // "yellow"
console.log("Has 'dog':", test.has("dog")); // true
test.remove("hat");
console.log("Has 'hat' After Removal:", test.has("hat")); // false

// Clear the hash map
test.clear();
console.log("Size After Clear:", test.length()); // 0