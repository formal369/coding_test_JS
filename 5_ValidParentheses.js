// # 올바른 괄호 (Valid Parentheses)
//   - 괄호가 올바르게 Paired 되었다는 것은 "(", "{", "[" 등의 괄호가 열렸으면
//     반드시 짝지어서 ")", "}", "]" 가 닫혀야한다는 말

// # 예제
//   - "()()" or "(())()" 올바른 괄호 O
//   - "{}{}{" or "{{}" 올바른 괄호 X
//   - "[(])" 올바른 괄호 X 


function validParentheses(input) {
    const stack = [];
    for(const char of input) {
        if(char === "{" || char === "[" || char === "(") {
            stack.push(char);
        } else {
            const lastChar = stack.pop();
            if(char === "}" && lastChar !== "{" || 
                char === "]" && lastChar !== "[" ||
                char === ")" && lastChar !== "("    
            ){
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(validParentheses("[(})]"))
console.log(validParentheses("{([])}"))
console.log(validParentheses("())"))