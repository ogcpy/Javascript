# Linked Lists

## Description
A JavaScript implementation of a singly linked list data structure. Includes methods for appending, prepending, inserting, removing, and searching nodes.

## Features
- Append, prepend, and insert nodes.
- Remove nodes by index.
- Search for nodes by value.
- Convert the list to a string for visualization.

## Technologies Used
- JavaScript

## How to Run
1. Clone the repository.
2. Open `index.html` in your browser or run the script using Node.js.

## Example Usage
```javascript
const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
console.log(list.toString()); // ( 5 ) -> ( 10 ) -> ( 20 ) -> null