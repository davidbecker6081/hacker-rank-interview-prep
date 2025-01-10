import { describe, test, expect } from '../testRunner'
import { twoSum, twoSumAlt } from '../twoSum'

const testTwoSum = ({ testName, actual, expected }) => {
  test(testName, () => { expect(actual).to.equal(expected) })
}

describe('Two Sum', () => {
  testTwoSum({ testName: 'Two Sum Match', actual: twoSum([1, 2, 3, 4, 5], 8), expected: [2, 4] })
  testTwoSum({ testName: 'Two Sum No Match', actual: twoSum([1, 2, 3, 4, 5], 0), expected: false })
  testTwoSum({ testName: 'Two Sum Match Negative', actual: twoSum([1, -2, 3, -3, 5], -5), expected: [1, 3] })
  testTwoSum({ testName: 'Two Sum Match Alt', actual: twoSumAlt([1, 2, 3, 4, 5], 8), expected: [2, 4] })
  testTwoSum({ testName: 'Two Sum No Match Alt', actual: twoSumAlt([1, 2, 3, 4, 5], 0), expected: false })
  testTwoSum({ testName: 'Two Sum Match Negative Alt', actual: twoSumAlt([1, -2, 3, -3, 5], -5), expected: [1, 3] })
})
