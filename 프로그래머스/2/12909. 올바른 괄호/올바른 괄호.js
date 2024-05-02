function solution(s){
//괄호 ( 문자로 열렸으면 ) 문자로 닫혀야 함 올바른 형식인지 확인하는 것
//열려 있는 개수를 세고 닫히면 그만큼 뻴셈 -1이하면 올바른 형식이 아닌 것    
    var answer = false;
    let braket = 0
    for(el of s){
        el === "(" ? braket++ : braket--
        if(braket < 0){
            break
        }
    }
    return braket === 0 ? true : answer;
}