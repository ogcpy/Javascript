function knightMoves(start, end) {
    // All possible knight moves
    const moves = [
      [2, 1], [2, -1], [-2, 1], [-2, -1],
      [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];
    
    // BFS to find the shortest path
    function bfs(start, end) {
      // Queue to store the positions and the path taken to reach them
      const queue = [[start, [start]]];
      const visited = new Set();
      visited.add(start.toString()); // Store visited positions to avoid cycles
  
      while (queue.length > 0) {
        const [current, path] = queue.shift();
        const [x, y] = current;
        
        // If we reached the destination
        if (current[0] === end[0] && current[1] === end[1]) {
          return path; // Return the path to the destination
        }
  
        // Explore all possible moves
        for (let [dx, dy] of moves) {
          const newX = x + dx;
          const newY = y + dy;
          const newPosition = [newX, newY];
  
          // Make sure the new position is within bounds and not visited
          if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7 && !visited.has(newPosition.toString())) {
            visited.add(newPosition.toString());
            queue.push([newPosition, [...path, newPosition]]);
          }
        }
      }
  
      return []; // Return an empty path if no path found (shouldn't happen in a chessboard scenario)
    }
  
    // Call BFS to find the path
    const path = bfs(start, end);
  
    // Output the result
    if (path.length > 0) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      path.forEach(position => {
        console.log(position);
      });
    } else {
      console.log("No path found.");
    }
  }
  
  // Test cases
  knightMoves([0, 0], [1, 2]); // Example 1
  knightMoves([0, 0], [3, 3]); // Example 2
  knightMoves([3, 3], [0, 0]); // Example 3
  knightMoves([0, 0], [7, 7]); // Example 4
  knightMoves([3, 3], [4, 3]); // Example 5
  