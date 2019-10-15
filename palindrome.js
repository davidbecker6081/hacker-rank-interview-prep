export const palindrome = (str) => {
  if (str.length < 2) {
    return true
  }

  for (let i = 0; i <= (str.length - 1) / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true
}

export const palindromeRecursive = (str) => {
  if (str.length % 2 !== 0 && str.length === 1) {
    return true
  }

  if (str.length % 2 === 0 && str.length === 0) {
    return true
  }

  return str[0] === str[str.length - 1] && palindromeRecursive(str.substr(1, str.length - 2))
}

// '1 1 1'
