// # Spiral Matrix / 나선형 매트릭스
//  - 2D Array / 2차원 배열 순회 문제
//  - m x n 사이즈의 ( m: rows, n: columns ) 매트릭스의 엘레멘트를 나선형 모양으로 순회

//  - 예제 input: [[1,2,3], [4,5,6], [7,8,9]]
//  - 예제 output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

// 문제 접근 방법
// 1. 4곳의 코너 포인터를 각각 변수에 저장 & 초기화

const test1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]     // [1, 2, 3, 6, 9, 8, 7, 4, 5]
const test2 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]     // [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]

function spiralMatrix(matrix) {
    const result = []

    let left = 0
    let right = matrix[0].length - 1
    let top = 0
    let bottom = matrix.length - 1

    while(left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i])
        }
        top++;

        for(let i = top; i <= bottom; i++) {
            result.push(matrix[i][right])
        }
        right--;

        if(top <= bottom) {
            for(let i = right; i >= left; i--) {
                result.push(matrix[bottom][i])
            }
            bottom--;
        }

        if(left <= right) {
            for(let i = bottom; i >= top; i--){
                result.push(matrix[i][left])
            }
            left++;
        }
    }
    return result;
}

console.log(spiralMatrix(test1));
console.log(spiralMatrix(test2));