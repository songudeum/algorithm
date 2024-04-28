function solution(participant, completion) {
    //참여자와 완주자가 담긴 배열이 있는데 완주하지 못한 사람 1명을 찾는 것 (동명이인 존재
    //동명이인의 참가자가 완주 둘다 하면 문제X 둘다 완주 안하고 하나만 했으면 인덱스 일치하지 않음
    //sort를 똑같이했는데도 인덱스가 다르면 participant[i]는 완주하지 못한 사람임
    //for문 끝났는데도 답이 없으면 제일 마지막 참가자가 통과 못한 것
    
    let answer = ""
    participant.sort();
    completion.sort();
    
    for(let i = 0; i < completion.length; i++){
    
        if(participant[i] !== completion[i]){
            answer = participant[i]
            break
        } 
    }
    
    return answer !=="" ? answer : participant.pop()
}
