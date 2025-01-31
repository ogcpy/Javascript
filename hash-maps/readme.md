# HashMap Implementation in JavaScript

## Introduction
This project is a custom implementation of a HashMap data structure in JavaScript. It includes essential methods such as `set`, `get`, `remove`, `length`, and dynamic resizing when the load factor exceeds 0.75.

## Features
- **Custom Hash Function**: Uses a hashing algorithm to distribute keys evenly across buckets.
- **Collision Handling**: Implements separate chaining to manage hash collisions.
- **Dynamic Resizing**: Doubles the capacity when the load factor exceeds 0.75.
- **Standard HashMap Methods**:
  - `set(key, value)`: Adds or updates a key-value pair.
  - `get(key)`: Retrieves the value for a given key.
  - `has(key)`: Checks if a key exists in the map.
  - `remove(key)`: Deletes a key-value pair.
  - `length()`: Returns the number of stored keys.
  - `clear()`: Removes all entries.
  - `keys()`, `values()`, `entries()`: Retrieve stored keys, values, or key-value pairs.

## Installation
Clone the repository:
```sh
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
Or simply copy and paste the HashMap class into your project.

Usage
Create an instance of the HashMap and use its methods:

javascript
Copy
Edit
const hashMap = new HashMap();

hashMap.set('apple', 'red');
hashMap.set('banana', 'yellow');

console.log(hashMap.get('apple')); // Output: red
console.log(hashMap.has('banana')); // Output: true

hashMap.remove('banana');
console.log(hashMap.has('banana')); // Output: false
Testing
Test the HashMap using the provided test cases:

javascript
Copy
Edit
const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');

console.log(test.length()); // Expected output: 4

test.set('banana', 'green'); // Overwriting value
console.log(test.get('banana')); // Expected output: green

test.set('moon', 'silver'); // Should trigger resizing
console.log(test.length()); // Should reflect correct count
Extra Credit: HashSet
A HashSet can be implemented using the same logic as HashMap, but only stores keys without values.

License
This project is open-source and available under the MIT License.x
