export const reverseString = (str) => {
  if (str.length < 2) {
    return str
  }

  let reversed = ''
  for (let i = 0; i <= str.length - 1; i++) {
    reversed += str[str.length - 1 - i]
  }

  return reversed
}

export const reverseStringRecursive = (str) => {
  if (str.length === 0) {
    return ''
  }
  return str.charAt(str.length - 1) + reverseStringRecursive(str.substr(0, str.length - 1))
  // return reverseStringRecursive(str.substr(1)) + str.charAt(0)
}
