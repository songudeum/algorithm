function solution(s) {
    var answer = 0;
    //먼저 첫글자 x와 x가 아닌 다른 글자들이 나오는 횟수 세서 같아지면 멈추고 지금까지 읽은 문자열 분리
    //위에 분리한 문자열빼고 남은 부분에 대해서 이과정 반복 없으면 종료
    //두 횟수가 다른 상태에서 읽을 글자 없어도 문자열 분리 후 종료 후 분해한 문자열 개수 출력
    //첫글자와 다른문자 수를 그냥 하나의 변수의 값을 1으로 설정하고 0이 되면 카운트 1
    let first = s[0] 
    let same = 1
    
    for(let i = 1, len = s.length; i < len; i++){
        if(first === ""){
            first = s[i]
            same++
            continue
        }
        first === s[i] ? same++ : same--
        if(same === 0){
            answer++
            first = ""
        }
    }
    
    
    return same !==0 ? answer+1 : answer;
}