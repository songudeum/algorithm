function solution(s) {
    //s의 모든 0 제거하고 x의 길이 c를 2진법 표현한 문자열
    //filter로 0 제거하고 length를 toString으로 2진법으로 변경 후 변경횟수 추가
    var answer = [0,0];
    let copyedS = s
    while(copyedS !== "1"){
         const filteredS = [...copyedS].filter((el)=>el!=="0").join("")
         answer[1] += copyedS.length - filteredS.length 
         copyedS = (filteredS.length).toString(2)
         answer[0] += 1
     }
    return answer;
}