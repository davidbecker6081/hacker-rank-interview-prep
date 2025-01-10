import { describe, test, expect } from '../testRunner'
import factorials from './testHelpers/factorials'
import { firstFactorial } from '../firstFactorial'

const testFactorial = ({ testName, actual, expected }) => {
  test(testName, () => { expect(actual).to.equal(expected) })
}

describe('First Factorial', () => {
  testFactorial({ testName: 'Factorial of 0', actual: firstFactorial(0), expected: factorials[0] })
  testFactorial({ testName: 'Factorial of 1', actual: firstFactorial(1), expected: factorials[1] })
  testFactorial({ testName: 'Factorial of 2', actual: firstFactorial(2), expected: factorials[2] })
  testFactorial({ testName: 'Factorial of 3', actual: firstFactorial(3), expected: factorials[3] })
  testFactorial({ testName: 'Factorial of 4', actual: firstFactorial(4), expected: factorials[4] })
  testFactorial({ testName: 'Factorial of 5', actual: firstFactorial(5), expected: factorials[5] })
  testFactorial({ testName: 'Factorial of 6', actual: firstFactorial(6), expected: factorials[6] })
  testFactorial({ testName: 'Factorial of 7', actual: firstFactorial(7), expected: factorials[7] })
  testFactorial({ testName: 'Factorial of 8', actual: firstFactorial(8), expected: factorials[8] })
})
