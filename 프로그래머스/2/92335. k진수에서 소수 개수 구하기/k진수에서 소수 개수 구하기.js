function solution(n, k) {
    //양쪽0이 있는 경우, 오른쪽에만 0이 있는 경우, 왼쪽에만 0이 있는 경우, 양쪽에 아무것도 없는 경우
    //각 자리수에 0 포함하지 않는 소수
    //n을 toString으로 k진수로 바꿈
    //0이 나오면 저장하던 문자열을 끊고 배열에 숫자로 저장하고 소수인지 판별해서 answer에 더함
    let answer = 0;
    
    const numberList = n.toString(k).split(0)
    
    
    for(let i = 0, len = numberList.length; i < len; i++){
        const number = +numberList[i]
        if(number === 0 || number === 1) continue
        let divisor = 0
        for(let j = 2, len2 = Math.sqrt(number); j <= len2; j++){
            if(number % j === 0){
                divisor += 1
                break
            }
        }
        if(divisor === 0) answer += 1
    }
    
    return answer
}