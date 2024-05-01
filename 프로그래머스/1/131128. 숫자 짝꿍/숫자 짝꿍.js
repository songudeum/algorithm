function solution(X, Y) {
    //x,y에 겹치는 숫자를 다 이용해서 만들 수 있는 가장 큰 정수가 두수의 짝꿍
    //짝꿍이 존재하지 않으면 -1 0으로만 구성되면 0
    //90for문 for문2개(X용하나 Y용하나)
    //X Y의 0~9까지의 숫자의 개수를 저장하고 그 숫자별 개수를 비교해서 일치하는 숫자의 수만큼 문자열로 만드는거
    let answer = ""
    
    const match = new Array(10).fill(0) 
    const match1 = new Array(10).fill(0)
    for(num of X){
        match[num] += 1  
    }
    for(num of Y){
        match1[num] += 1
    }
    for(let num = 9; num >= 0; num--){
        if(match[num] > match1[num]){
            answer+=(num+"").repeat(match1[num])
        }
        if(match[num] < match1[num]){
            answer+=(num+"").repeat(match[num])
        }
        if(match[num] === match1[num]){
            if(match[num] === 0){
                continue
            }
             answer+=(num+"").repeat(match[num])
        }
    }
    
    return answer === "" ? "-1" : +answer === 0 ? "0" : answer 
   
}