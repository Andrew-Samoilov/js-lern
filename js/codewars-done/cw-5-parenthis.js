console.log(" -  * CodeWars * Valid Parentheses * - ");
console.log();

function validParentheses(parens) {
  console.log(parens);

  while (parens.indexOf("()") != -1) {
    parens = parens.replace("()", "")
    // console.log('-', parens);
  }

  console.log(parens);
  return (parens.length === 0) ? true : false;
}


// console.log(validParentheses("(())((()())())"), true);
// console.log(validParentheses(")"), false);
// console.log(validParentheses(""), true);
console.log(validParentheses("()"), true);
console.log(validParentheses("())"), false);