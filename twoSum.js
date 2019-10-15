/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = (nums, target) => {
    const table = new Map();
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (table.has(diff)) {
            const indexOfMatch = table.get(diff);
            return [indexOfMatch, i];
        }
        table.set(nums[i], i)
    }
    return false
};

export const twoSumAlt = (nums, target) => {
  const table = {};
  for (let i = 0; i < nums.length; i++) {
      if (!!table[nums[i]]) {
          return [ table[nums[i]], i ];
      }
      table[target-nums[i]] = i;
  }
  return false
};
