// # 팰린드롬 / 회문 (Palindrome)
//     - 앞으로 & 뒤로 읽었을 때 같은 문자열
//     - 예) level, eye, hannah

// # 문제
//     - 입력받은 문자열이 팰린드롬인지 판별하는 알고리즘을 구현

// # 예제 
//     - level -> true
//     - david -> false
//     - eye -> true

// 1. 추가 문자열 활용
function checkPalindrome1(str) {
    let reversed = "";
    for(let i = str.length -1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed === str;
}

// 2. Two Pointer 투포인터 활용
function checkPalindrome2(str) {
    const len = str.length;
    const middle = Math.floor(len/2);
    for(let i = 0; i < middle; i++) {
        if(str.charAt(i) !== str.charAt(len -1 - i)) {
            return false;
        }
    }
    return true;
}


console.log(checkPalindrome1("abba"));
console.log(checkPalindrome1("david"));
console.log(checkPalindrome1("eye"));

console.log(checkPalindrome2("abba"));
console.log(checkPalindrome2("david"));
console.log(checkPalindrome2("eye"));