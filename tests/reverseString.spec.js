import { describe, test, expect } from '../testRunner'
import { reverseString, reverseStringRecursive } from '../stringReversal'

const testReverseString = ({ testName, actual, expected }) => {
  test(testName, () => { expect(actual).to.equal(expected) })
}

describe('First Factorial', () => {
  testReverseString({ testName: 'a', actual: reverseString('a'), expected: 'a' })
  testReverseString({ testName: 'hello', actual: reverseString('hello'), expected: 'olleh' })
  testReverseString({ testName: 'apple', actual: reverseString('apple'), expected: 'elppa' })
  testReverseString({ testName: 'Greetings!', actual: reverseString('Greetings!'), expected: '!sgniteerG' })
  testReverseString({ testName: '1;ai0n *', actual: reverseString('1;ai0n *'), expected: '* n0ia;1' })
  testReverseString({ testName: 'hello', actual: reverseStringRecursive('hello'), expected: 'olleh' })
  testReverseString({ testName: 'apple', actual: reverseStringRecursive('apple'), expected: 'elppa' })
  testReverseString({ testName: 'Greetings!', actual: reverseStringRecursive('Greetings!'), expected: '!sgniteerG' })
  testReverseString({ testName: '1;ai0n *', actual: reverseStringRecursive('1;ai0n *'), expected: '* n0ia;1' })
  testReverseString({ testName: 'a', actual: reverseStringRecursive('a'), expected: 'a' })
})
