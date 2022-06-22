// # Array 중복 제거

const nums = [1, 2, 3, 6, 6, 7, 2, 2, 8, 9];

// 1. Set() 중복허용X
const uniqueNums1 = [...new Set(nums)];

// 2. indexOf() 
const uniqueNums2 = nums.filter((item, position) => {
    return nums.indexOf(item) === position;
})

// 3. caching / frequency map
function uniqueNums3(arr) {
    const uniqueElements = {};
    const result = [];
    for(let element of arr) {
        if(!uniqueElements[element]) {
            result.push(element);
        }
        uniqueElements[element] = element;
    }
    return result;
}


console.log(uniqueNums1);
console.log(uniqueNums2);
console.log(uniqueNums3(nums));