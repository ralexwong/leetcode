const _ = require('lodash');

/*
There is a brick wall in front of you. The wall is rectangular and has several rows of bricks. The bricks have the same height but different width. You want to draw a vertical line from the top to the bottom and cross the least bricks.

The brick wall is represented by a list of rows. Each row is a list of integers representing the width of each brick in this row from left to right.

If your line go through the edge of a brick, then the brick is not considered as crossed. You need to find out how to draw the line to cross the least bricks and return the number of crossed bricks.


-Get the sum of the bricks we've seen so far in a row
-Check or add the sum into a hashmap
-Redo this for every row in our matrix

-Loop through the hashmap, finding the max sum
-Return height of matrix/wall - sum


Overall:
- Ask more clarifying question. Whenever you identify any assumptions you might've made so far, be sure to confirm it with the interviewer.
- Start with the bruteforce so you demonstrate you know how to solve the problem and know what runtime you want to beat
- Remove "i believe so" from justification. 
  - You can justify case by case ("for the general case ..." "for this edge case ..")
- Be sure to define "n" when you talk about runtime
  - Here the problem statement gives you a rectangle represented as a matrix so (n x m) is common where n is height and m is width.
- Be careful on implementation & testing your code
  - null check on your edge case and ordering of checks
  - accessing the correct value in the matrix
  - cleanliness, can refactor updating the max inside the first loop
  - your general case covers the 1 brick case so theres no need for the explicit edge case check
  
  
wall = [
  [1,2],
  [2,1],
  [3]
]

hash = {
  1 : 2,
  3 : 3
}

max = 0

i = 0
  sum = 1
  
*/

const brickWall = (wall) => {
  let hash = new Map();
  let max = 0
  
  for (let i = 0; i < wall.length; i++) {
    let sum = 0;
    
    for (let j = 0; j < wall[i].length; j++) {
      sum += wall[i][j] 
    
      hash[sum] = hash[sum] + 1 || 1; 
      max = Math.max(hash[sum], max)
    }
  }
  
  return wall.length - max
}