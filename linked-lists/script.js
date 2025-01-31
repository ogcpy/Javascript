export class Node {
    constructor(value = null, nextNode = null) {
      this.value = value;
      this.nextNode = nextNode;
    }
  }

 export default class LinkedList {
    constructor() {
      this.headNode = null; // Initially, the list is empty
    }
  
    // Append a node to the end of the list
    append(value) {
      const newNode = new Node(value);
      if (!this.headNode) {
        this.headNode = newNode; // If list is empty, set new node as head
      } else {
        let current = this.headNode;
        while (current.nextNode) {
          current = current.nextNode; // Traverse to the last node
        }
        current.nextNode = newNode; // Add new node at the end
      }
    }
  
    // Prepend a node to the start of the list
    prepend(value) {
      const newNode = new Node(value, this.headNode); // New node points to current head
      this.headNode = newNode; // Update head to the new node
    }
  
    // Return the total number of nodes in the list
    size() {
      let count = 0;
      let current = this.headNode;
      while (current) {
        count++;
        current = current.nextNode;
      }
      return count;
    }
  
    // Return the first node in the list
    head() {
      return this.headNode;
    }
  
    // Return the last node in the list
    tail() {
      if (!this.headNode) return null;
      let current = this.headNode;
      while (current.nextNode) {
        current = current.nextNode;
      }
      return current;
    }
  
    // Return the node at the given index
    at(index) {
      if (index < 0 || index >= this.size()) return null; // Invalid index
      let current = this.headNode;
      for (let i = 0; i < index; i++) {
        current = current.nextNode;
      }
      return current;
    }
  
    // Remove the last node from the list
    pop() {
      if (!this.headNode) return; // Empty list
      if (!this.headNode.nextNode) {
        this.headNode = null; // Only one node in the list
        return;
      }
      let current = this.headNode;
      while (current.nextNode.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = null; // Remove the last node
    }
  
    // Check if the list contains a value
    contains(value) {
      let current = this.headNode;
      while (current) {
        if (current.value === value) return true;
        current = current.nextNode;
      }
      return false;
    }
  
    // Find the index of a node containing the value
    find(value) {
      let index = 0;
      let current = this.headNode;
      while (current) {
        if (current.value === value) return index;
        current = current.nextNode;
        index++;
      }
      return null;
    }
  
    // Represent the list as a string
    toString() {
      let result = "";
      let current = this.headNode;
      while (current) {
        result += `( ${current.value} ) -> `;
        current = current.nextNode;
      }
      result += "null";
      return result;
    }
  
    // Extra Credit: Insert a node at a specific index
    insertAt(value, index) {
      if (index < 0 || index > this.size()) return; // Invalid index
      if (index === 0) {
        this.prepend(value); // Insert at the start
        return;
      }
      const newNode = new Node(value);
      let current = this.headNode;
      for (let i = 0; i < index - 1; i++) {
        current = current.nextNode;
      }
      newNode.nextNode = current.nextNode;
      current.nextNode = newNode;
    }
  
    // Extra Credit: Remove a node at a specific index
    removeAt(index) {
      if (index < 0 || index >= this.size()) return; // Invalid index
      if (index === 0) {
        this.headNode = this.headNode.nextNode; // Remove the head
        return;
      }
      let current = this.headNode;
      for (let i = 0; i < index - 1; i++) {
        current = current.nextNode;
      }
      current.nextNode = current.nextNode.nextNode; // Skip the node at the index
    }
  }