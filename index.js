function hasTargetSum(array, target) {
  // Write your algorithm here
  const complementsSet = {};

  for (const num of array) {
    if (complementsSet[num]) {
      return true;
    }
    complementsSet[target - num] = true;
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  1.Create an empty object called complements.
  2.Iterate through each number num in the input array.
  3.Check if num is already in complements. If it is, then num is the complement of some previous number, and the function can return true.
  4.If num is not in complements, add target - num to complements.
  5.If the function has iterated through the entire array without finding a complement, it returns false.
*/

/*
  Add written explanation of your solution here
  the function iterates through the array and keeps track of complements seen so far using an object called complementsSet. 
  If the function encounters a number whose complement (i.e., the difference between the target and the number) has already been seen, it returns true. 
  If the function reaches the end of the array without finding a pair of numbers that adds up to the target, it returns false.  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
