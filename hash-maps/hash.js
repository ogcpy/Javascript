class HashMap {
  constructor(capacity = 16, loadFactor = 0.75) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.buckets = new Array(capacity);
    this.size = 0;
  }

  // Hash function to create a hash code from a key
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode % this.capacity;
  }

  // Method to ensure we throw an error for invalid index access
  checkIndex(index) {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
  }

  // Method to handle collisions using chaining (linked lists)
  set(key, value) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    // Check if key already exists, if it does, update the value
    for (let i = 0; i < this.buckets[index].length; i++) {
      const [existingKey] = this.buckets[index][i];
      if (existingKey === key) {
        this.buckets[index][i] = [key, value];
        return;
      }
    }

    // Add new key-value pair if key doesn't exist
    this.buckets[index].push([key, value]);
    this.size++;

    // Check if load factor exceeded and resize the hash map if needed
    if (this.size / this.capacity > this.loadFactor) {
      this.resize();
    }
  }

  // Method to resize the hash map when load factor exceeds
  resize() {
    const newCapacity = this.capacity * 2;
    const newBuckets = new Array(newCapacity);

    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        for (let j = 0; j < this.buckets[i].length; j++) {
          const [key, value] = this.buckets[i][j];
          const newIndex = this.hash(key) % newCapacity;
          if (!newBuckets[newIndex]) {
            newBuckets[newIndex] = [];
          }
          newBuckets[newIndex].push([key, value]);
        }
      }
    }

    this.buckets = newBuckets;
    this.capacity = newCapacity;
  }

  // Get the value for a key
  get(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) return null;

    for (let i = 0; i < this.buckets[index].length; i++) {
      const [existingKey, value] = this.buckets[index][i];
      if (existingKey === key) {
        return value;
      }
    }

    return null;
  }

  // Check if the hash map contains a key
  has(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) return false;

    for (let i = 0; i < this.buckets[index].length; i++) {
      const [existingKey] = this.buckets[index][i];
      if (existingKey === key) {
        return true;
      }
    }

    return false;
  }

  // Remove a key-value pair
  remove(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) return false;

    for (let i = 0; i < this.buckets[index].length; i++) {
      const [existingKey] = this.buckets[index][i];
      if (existingKey === key) {
        this.buckets[index].splice(i, 1);
        this.size--;
        return true;
      }
    }

    return false;
  }

  // Get the length of the hash map
  length() {
    return this.size;
  }

  // Clear all the key-value pairs
  clear() {
    this.buckets = new Array(this.capacity);
    this.size = 0;
  }

  // Get all the keys
  keys() {
    const result = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        for (let j = 0; j < this.buckets[i].length; j++) {
          result.push(this.buckets[i][j][0]);
        }
      }
    }
    return result;
  }

  // Get all the values
  values() {
    const result = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        for (let j = 0; j < this.buckets[i].length; j++) {
          result.push(this.buckets[i][j][1]);
        }
      }
    }
    return result;
  }

  // Get all the key-value pairs
  entries() {
    const result = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        for (let j = 0; j < this.buckets[i].length; j++) {
          result.push(this.buckets[i][j]);
        }
      }
    }
    return result;
  }
}

// Test the HashMap class
const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log(test.length()); // Should print the size of the map
console.log(test.get('apple')); // Should print 'red'

test.set('apple', 'green'); // Overwrite value
console.log(test.get('apple')); // Should print 'green'

test.set('moon', 'silver'); // This should trigger a resize
console.log(test.capacity); // Should print the new capacity (doubled)
console.log(test.length()); // Should print the size of the map

console.log(test.entries()); // Should print the key-value pairs
console.log(test.keys()); // Should print all keys
console.log(test.values()); // Should print all values

test.remove('banana'); // Remove 'banana'
console.log(test.has('banana')); // Should print false

test.clear(); // Clear the map
console.log(test.length()); // Should print 0

