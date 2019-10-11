import { describe, test, expect } from '../testRunner'

describe({ description: 'ParentComponent', callback: () => {
  test({ testName: 'it should do this thing', callback: () => {
    expect({ actual: 2, expected: 1 })
  }})

  test({ testName: 'it should do this thing2', callback: () => {
    expect({ actual: 3, expected: 2 })
  }})

  test({ testName: 'it should do this thing3', callback: () => {
    expect({ actual: 1, expected: 1 })
  }})

  test({ testName: 'it should do this thing4', callback: () => {
    expect({ actual: 2, expected: 1 })
  }})

  test({ testName: 'it should do this thing5', callback: () => {
    expect({ actual: 5, expected: 1 })
  }})
}})
