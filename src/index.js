module.exports = function check(str, bracketsConfig) {
  const stack = []
  const openedBrackets = []
  const closedBrackets = []
  for (let i = 0; i < bracketsConfig.length; i++) {
    openedBrackets.push(bracketsConfig[i][0])
    closedBrackets.push(bracketsConfig[i][1])
  }
  for (let j = 0; j < str.length; j++) {
    if (closedBrackets.includes(str[j]) && stack.length > 0) {
      const bracket = openedBrackets[closedBrackets.indexOf(str[j])]
      if (stack[stack.length - 1] === bracket || stack[stack.length - 1] === str[j]) {
        stack.pop()
      } else if (str[j] !== bracket) {
        return false
      } else {
        stack.push(str[j])
      }
    } else {
      stack.push(str[j])
    }
  }
  return stack.length === 0
}