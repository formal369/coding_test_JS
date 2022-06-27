// # 순열 / Permutations
//  - 알고리즘: 주어진 n 엘레멘트들의 모든 경우의 수를 계산하는 방법 / O(n!) 시간 복잡도
//  - 백트랙킹 / DFS 활용하여 문제접근

// 예제 input: [1, 2]
// 예제 output: [[1, 2], [2, 1]]

// 예제 input:  ["a", "b", "c"]
// 예제 output: 
//              ["a", "b", "c"]
//              ["a", "c", "b"] 
//              ["b", "a", "c"] 
//              ["b", "c", "a"] 
//              ["c", "b", "a"] 
//              ["c", "a", "b"]

function permutate(arr) {
    const result = [];

    // DFS
    const dfs = (i, arr) => {
        // base condition
        if(i === arr.length) {
            return result.push([...arr])
        }

        for(let j=i; j<arr.length; j++) {
            // swap
            [arr[i], arr[j]] = [arr[j], arr[i]];
            // dfs
            dfs(i + 1, arr);
            // swap back
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    dfs(0, arr);
    return result;
}

console.log(permutate(["a", "b", "c"]))
