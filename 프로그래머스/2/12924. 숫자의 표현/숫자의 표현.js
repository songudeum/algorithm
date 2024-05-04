function solution(n) {
    //연속된 자연수들의 합으로 표현할 수 있는 방법의 개수를 구해라
    //나누고 올림한 수 이하까지만 1씩 증가하는 덧셈을 n이하까지 했을 때 n으로 딱 떨어지면 추가
    //마지막에 답에 n=n인 경우 1을 더해줌
    const nOfHalf = n/2
    let answer = 0;
    for(let i = 1; i <= nOfHalf; i++){
        let sum = i;
        for(let j = i + 1; j <= nOfHalf + 1; j++){
            sum += j
            if(sum <= n){
                if(sum === n){
                    answer+=1                
                }
            } else break
        }
    }

    return answer+1;
}