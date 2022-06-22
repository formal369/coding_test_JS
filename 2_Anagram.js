// # 애너그램 판별
    // - 두 단어의 글자 나열순서는 다르지만 구성이 일치할 시 -> 애너그램

const stringA = "listen";
const stringB = "silent";

// 1. split(), sort(), and join()
function isAnagram1(strA, strB) {
    if(strA.length !== strB.length) {
        return false;
    }
    return strA.split("").sort().join() === strB.split("").sort().join();
}

// 2. map = {}
function isAnagram2(strA, strB) {
    if(strA.length !== strB.length) {
        return false;
    }
    const hashMap = {};
    for(const char of strA) {
        hashMap[char] = hashMap[char] ? hashMap[char] + 1 : 1;
    }
    for(const char of strB) {
        if(!hashMap[char]) {
            return false;
        }
        hashMap[char]--;
    }
    return true;
}

console.log(isAnagram1(stringA, stringB));
console.log(isAnagram2(stringA, stringB));