// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example1 :
// Input : nums = [0, 1, 0, 3, 12]
// Output : [1, 3, 12, 0, 0]

// Example2 :
// Input : nums = [0]
// Output : [0]

const example1 = [0, 1, 0, 3, 12];
const example2 = [0];

var moveZeroes = function(nums) {

  let j = 0;

  for(let i=0; i<nums.length; i++) {
    if(nums[i] !== 0) {
      // swap
      let temp = nums[j]
      nums[j] = nums[i]
      nums[i] = temp

      j++
    }
  }

  return nums;
}

console.log(moveZeroes(example1));
console.log(moveZeroes(example2));