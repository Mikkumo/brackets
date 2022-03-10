module.exports = function check(str, bracketsConfig) {
  let open = ""
  let close = ""
  for (const iterator of bracketsConfig) {
    open += iterator[0]
    close += iterator[1]
  }
  console.log(open)
  console.log(close)
  console.log(str)
  return isBalanced(str, "", open, close)
}

function isOpen(open, char) {
  return open.indexOf(char) != -1
}

function isClose(close, char) {
  return close.indexOf(char) != -1
}

function isMatching(open, charOpen, close, charClose) {
  return open.indexOf(charOpen) === close.indexOf(charClose)
}

function isEmpty(str) {
  return str.length <= 0;
}

function isBalanced(input, stack, open, close) {
  if (isEmpty(input)) {
    console.log("stack empty? ", isEmpty(stack))
    return isEmpty(stack)
  }
  else if (isOpen(open, input.charAt(0))) {
    console.log("char is open, ", input.charAt(0))
    return isBalanced(input.substring(1), input.charAt(0) + stack, open, close)
  } else if (isClose(close, input.charAt(0))) {
    console.log("char is end, ", input.charAt(0))
    return !isEmpty(stack) && isMatching(open, stack.charAt(0), close, input.charAt(0))
      && isBalanced(input.substring(1), stack.substring(1), open, close)
  } else return isBalanced(input.substring(1), stack, open, close)
}
