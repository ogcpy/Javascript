// Node Class
class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  // Tree Class
  class Tree {
    constructor(array) {
      this.root = this.buildTree(array);
    }
  
    buildTree(array) {
      const uniqueSortedArray = [...new Set(array)].sort((a, b) => a - b);
  
      const buildHelper = (array) => {
        if (array.length === 0) return null;
        const midIndex = Math.floor(array.length / 2);
        const node = new Node(array[midIndex]);
        node.left = buildHelper(array.slice(0, midIndex));
        node.right = buildHelper(array.slice(midIndex + 1));
        return node;
      };
  
      return buildHelper(uniqueSortedArray);
    }
  
    insert(value) {
      const newNode = new Node(value);
      const insertHelper = (node, value) => {
        if (node === null) return newNode;
  
        if (value < node.data) {
          node.left = insertHelper(node.left, value);
        } else if (value > node.data) {
          node.right = insertHelper(node.right, value);
        }
        return node;
      };
  
      this.root = insertHelper(this.root, value);
    }
  
    deleteItem(value) {
      const deleteHelper = (node, value) => {
        if (node === null) return null;
  
        if (value < node.data) {
          node.left = deleteHelper(node.left, value);
        } else if (value > node.data) {
          node.right = deleteHelper(node.right, value);
        } else {
          // Node to delete is found
          if (node.left === null && node.right === null) {
            return null; // Node is a leaf
          }
          if (node.left === null) {
            return node.right; // Node has only a right child
          }
          if (node.right === null) {
            return node.left; // Node has only a left child
          }
  
          // Node has both children, get the inorder successor (smallest in the right subtree)
          let successor = this.getMinValueNode(node.right);
          node.data = successor.data;
          node.right = deleteHelper(node.right, successor.data);
        }
        return node;
      };
  
      this.root = deleteHelper(this.root, value);
    }
  
    getMinValueNode(node) {
      while (node.left !== null) {
        node = node.left;
      }
      return node;
    }
  
    find(value) {
      const findHelper = (node, value) => {
        if (node === null) return null;
        if (value < node.data) return findHelper(node.left, value);
        if (value > node.data) return findHelper(node.right, value);
        return node;
      };
  
      return findHelper(this.root, value);
    }
  
    levelOrder(callback) {
      if (!callback) throw new Error("Callback function is required!");
      const queue = [this.root];
      while (queue.length > 0) {
        const node = queue.shift();
        callback(node);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
  
    inOrder(callback) {
      if (!callback) throw new Error("Callback function is required!");
  
      const inOrderHelper = (node) => {
        if (node === null) return;
        inOrderHelper(node.left);
        callback(node);
        inOrderHelper(node.right);
      };
  
      inOrderHelper(this.root);
    }
  
    preOrder(callback) {
      if (!callback) throw new Error("Callback function is required!");
  
      const preOrderHelper = (node) => {
        if (node === null) return;
        callback(node);
        preOrderHelper(node.left);
        preOrderHelper(node.right);
      };
  
      preOrderHelper(this.root);
    }
  
    postOrder(callback) {
      if (!callback) throw new Error("Callback function is required!");
  
      const postOrderHelper = (node) => {
        if (node === null) return;
        postOrderHelper(node.left);
        postOrderHelper(node.right);
        callback(node);
      };
  
      postOrderHelper(this.root);
    }
  
    height(node) {
      if (node === null) return -1;
      const leftHeight = this.height(node.left);
      const rightHeight = this.height(node.right);
      return Math.max(leftHeight, rightHeight) + 1;
    }
  
    depth(node) {
      let currentNode = this.root;
      let depth = 0;
      while (currentNode !== null && currentNode.data !== node.data) {
        if (node.data < currentNode.data) {
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
        depth++;
      }
      return currentNode !== null ? depth : -1;
    }
  
    isBalanced() {
      const checkBalance = (node) => {
        if (node === null) return true;
        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);
        const balanceFactor = Math.abs(leftHeight - rightHeight);
        return balanceFactor <= 1 && checkBalance(node.left) && checkBalance(node.right);
      };
  
      return checkBalance(this.root);
    }
  
    rebalance() {
      const inorderNodes = [];
      this.inOrder((node) => inorderNodes.push(node.data));
      this.root = this.buildTree(inorderNodes);
    }
  }
  
  // Pretty Print Function
  const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) return;
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
  
  // Driver Script
  // Create an array of random numbers < 100
  const randomArray = Array.from({ length: 15 }, () => Math.floor(Math.random() * 100));
  console.log("Original Array:", randomArray);
  
  // Create a tree
  const tree = new Tree(randomArray);
  console.log("Initial Tree:");
  prettyPrint(tree.root);
  
  console.log("Is tree balanced?", tree.isBalanced());
  
  // Print traversals
  console.log("Level Order Traversal:");
  tree.levelOrder((node) => console.log(node.data));
  
  console.log("In-Order Traversal:");
  tree.inOrder((node) => console.log(node.data));
  
  console.log("Pre-Order Traversal:");
  tree.preOrder((node) => console.log(node.data));
  
  console.log("Post-Order Traversal:");
  tree.postOrder((node) => console.log(node.data));
  
  // Unbalance the tree
  console.log("Adding large values to unbalance the tree...");
  [101, 105, 110].forEach(value => tree.insert(value));
  console.log("Is tree balanced after adding values?", tree.isBalanced());
  
  // Rebalance the tree
  tree.rebalance();
  console.log("Tree rebalanced.");
  console.log("Is tree balanced after rebalance?", tree.isBalanced());
  
  // Print traversals again after rebalancing
  console.log("Level Order Traversal After Rebalancing:");
  tree.levelOrder((node) => console.log(node.data));
  
  console.log("In-Order Traversal After Rebalancing:");
  tree.inOrder((node) => console.log(node.data));
  