import { describe, test, expect } from '../testRunner'
import { palindrome, palindromeRecursive } from '../palindrome'

const testPalindrome = ({ testName, actual, expected }) => {
  test(testName, () => { expect(actual).to.equal(expected) })
}

describe('Palindrome', () => {
  testPalindrome({ testName: 'a', actual: palindrome('a'), expected: true })
  testPalindrome({ testName: 'ab', actual: palindrome('ab'), expected: false })
  testPalindrome({ testName: 'abba', actual: palindrome('abba'), expected: true })
  testPalindrome({ testName: 'abcdef', actual: palindrome('abcdef'), expected: false })
  testPalindrome({ testName: '1 1 1', actual: palindrome('1 1 1'), expected: true })
  testPalindrome({ testName: '1 1 1 ', actual: palindrome('1 1 1 '), expected: false })
  testPalindrome({ testName: 'a', actual: palindromeRecursive('a'), expected: true })
  testPalindrome({ testName: 'ab', actual: palindromeRecursive('ab'), expected: false })
  testPalindrome({ testName: 'abba', actual: palindromeRecursive('abba'), expected: true })
  testPalindrome({ testName: 'abcdef', actual: palindromeRecursive('abcdef'), expected: false })
  testPalindrome({ testName: '1 1 1', actual: palindromeRecursive('1 1 1'), expected: true })
  testPalindrome({ testName: '1 1 1 ', actual: palindromeRecursive('1 1 1 '), expected: false })
})
