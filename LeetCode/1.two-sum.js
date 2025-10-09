/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// var twoSum = function (nums, target) {

//   for (let i = 0; i < nums.length; i++) {
//     // console.log('i'+i);

//     for (let j = i + 1; j < nums.length; j++) {
//       // console.log(nums[i],nums[j],'=', (nums[i]+nums[j]));

//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

var twoSum = function (nums, target) {
  const map = new Map();
  for (let index = 0; index < nums.length; index++) {
    map.set(nums[index], index);
  }
  for (let index = 0; index < nums.length; index++) {
    const complement = target - nums[index];
    if (map.has(complement) && map.get(complement) !== index) {
      return [index, map.get(complement)];
    }
  }
  return []
};

// @lc code=end
