let max;
//input: nums = [2,4,6,2,5] representing profit
//only choose left or right
//after you choose k increase by 1;
//https://www.geeksforgeeks.org/maximum-profit-sale-wines/
function lineOfWines(nums) {
    let DP = [];
    max = 0;
    console.log("max at top " + max);
    for(let i = -1; i <= nums.length; i++) DP[i] = [];
    DP[-1][nums.length - 1] = 0;
    DP[0][nums.length] = 0;
    DP[0][nums.length - 1] = 0;
    lineOfWinesHelper(0,nums.length - 1,1,nums, DP);
    return max;
}

function lineOfWinesHelper(i, j, k, nums, DP) {
    console.log("max in helper " + max);
    if(i > j || j < i || i >= nums.length || j < 0) return 0;
    console.log("i: " + i + ", j: " + j + ", k: " + k);
    let leftmax = DP[i][j] + nums[i] * k;
    let rightmax = DP[i][j] + nums[j] * k;
    console.log("leftmax: " + leftmax);
    console.log("rightmax: " + rightmax)
    let val = Math.max(leftmax, rightmax, max);
    console.log("val : " + val);
    max = val;
    if(!DP[i + 1][j] || DP[i + 1][j] < leftmax) {
        // we have new max DP[i + 1][j] when taking left
        DP[i + 1][j] = leftmax;
        lineOfWinesHelper(i + 1, j, k + 1, nums, DP);
    }

    if(!DP[i][j - 1] || DP[i][j - 1] < rightmax) {
        // we have new max DP[i][j-1] when taking right
        DP[i][j - 1] = rightmax;
        lineOfWinesHelper(i, j -1, k + 1, nums, DP);
    }




}


//testcases;
let sampleInput = [[2,5],[2],[3,8,2], [2,4,6,2,5], [5,4,3,2,1,0], []]
let expectedOut = [12,2, 32, 64, 70, 0];
for(let i = 0; i < sampleInput.length; i++) {
    console.log("TESTING " + sampleInput[i]);
    console.assert(lineOfWines(sampleInput[i]) == expectedOut[i], "ERROR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
}
