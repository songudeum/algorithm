function solution(number) {
    var answer = 0;
    //012 013 014 123 124 234 3개를 뽑아내고 각 숫자를 더함
    for(let i = 0; i<number.length; i++){
        for(let j=i+1; j<number.length; j++){
            for(let k=j+1; k<number.length; k++){
                if(number[i]+number[j]+number[k]===0){
                    answer+=1
                }
            }
        }
    }
    return answer;
}