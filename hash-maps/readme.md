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

**License**
This project is open-source and available under the MIT License
