function isBalanced(str) {
  const obj = {
    "]": "[",
    "}": "{",
    ")": "(",
  };
  let stack = [];

  for (let val of str.split("")) {
    if (val == "{" || val == "[" || val == "(") {
      stack.push(val);
    } else if (val == "}" || val == "]" || val == ")") {
      if (stack.pop() != obj[val]) return false;
    }
  }
  if (stack.length !== 0) return false;
  return true;
}

console.log(isBalanced("{}{}{][()}")); //false
console.log(isBalanced("{}{}{[]()}")); //true
console.log(isBalanced("{{{{{{{{{{")); //false
