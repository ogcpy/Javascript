// Import the LinkedList class (if using modules)
import LinkedList from './script.js'

const list = new LinkedList();

// Append nodes
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

// Test methods
console.log(list.toString()); // ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
console.log("Size:", list.size()); // 6
console.log("Head:", list.head().value); // dog
console.log("Tail:", list.tail().value); // turtle
console.log("At index 2:", list.at(2).value); // parrot
console.log("Contains 'cat':", list.contains("cat")); // true
console.log("Find 'snake':", list.find("snake")); // 4

// Extra Credit: Insert and remove nodes
list.insertAt("rabbit", 3);
console.log("After inserting 'rabbit' at index 3:", list.toString()); // ( dog ) -> ( cat ) -> ( parrot ) -> ( rabbit ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

list.removeAt(2);
console.log("After removing node at index 2:", list.toString()); // ( dog ) -> ( cat ) -> ( rabbit ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

// Pop the last node
list.pop();
console.log("After popping the last node:", list.toString()); // ( dog ) -> ( cat ) -> ( rabbit ) -> ( hamster ) -> ( snake ) -> null