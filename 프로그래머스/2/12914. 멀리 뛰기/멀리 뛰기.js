function solution(n) {
    const memo = [0,1,2]

    if(n<3) return memo[n]

    for(let i=3;i<=n;i++){
        memo[i] = (memo[i-2]+memo[i-1])%1234567
    }

return memo.pop()
}