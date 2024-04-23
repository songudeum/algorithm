function solution(nums) {
    var answer = 0;
    //nums 중복 제거
    const uniqueNums = new Set(nums)
    const uniqueArr = [...uniqueNums]
    return nums.length / 2 > uniqueArr.length ? uniqueArr.length : Math.floor(nums.length/2)  
}