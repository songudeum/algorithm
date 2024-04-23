function solution(cards1, cards2, goal) {
    var answer = '';
    //각 카드 뭉치[0]과 goal[i] 일치하는지 확인
    //일치하면 shift로 빼냄 일치하지 않으면 패스
    //만약 둘다 일치하지 않았을 경우 바로 리턴, 끝까지 다 완성했을 경우 yes
    for(let i = 0 ; i < goal.length; i++){
        if(cards1[0] === goal[i]){
            cards1.shift()
        }
        else if(cards2[0] === goal[i]){
            cards2.shift()
        }
        else{
            return answer+="No"
        }
    }
    return answer === "" ? "Yes" : answer;
}