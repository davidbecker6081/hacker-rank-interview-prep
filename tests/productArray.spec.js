import { describe, test, expect } from '../testRunner'
import { productArray } from '../productArray'

const testproductArray = ({ testName, actual, expected }) => {
  test(testName, () => { expect(actual).to.equal(expected) })
}

describe('Product Array', () => {
  testproductArray({ testName: 'Product Array 1', actual: productArray([1, 2, 3, 4, 5]), expected: [120, 60, 40, 30, 24] })
  testproductArray({ testName: 'Product Array 2', actual: productArray([3, 2, 1]), expected: [2, 3, 6] })
})
