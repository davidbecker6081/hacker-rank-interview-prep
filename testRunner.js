import consoleColors from './utils/consoleColors';

export const describe = (description, callback) => {
  console.log(consoleColors.FgWhite, description)
  callback()
}

export const test = (testName, callback) => {
  console.log(consoleColors.FgCyan, testName)
  callback()
}

export const expect = (actual) => {
  return {
    to: {
      equal: testEquality.bind(this, actual)
    }
  }
}

const testEquality = (actual, expected) => {
  if (expected === actual) {
    console.log(consoleColors.FgGreen, "Passed")
  } else {
    console.log(consoleColors.FgRed, "Failed")
    console.log(consoleColors.FgYellow, `Expected ${actual} to equal ${expected}`)
  }
}
