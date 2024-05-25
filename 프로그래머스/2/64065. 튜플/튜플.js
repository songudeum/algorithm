function solution(s) {
    //중복된 원소를 넣을수도 있고 원소의 순서가 다르면 다른 튜플임
    //1개부터 s.length개까지의 객체를 보고 원본 튜플을 출력해야 함
    //객체를 다 합한 값 - 그 이전 자리수 그룹의 합 = 해당 자리수
    //첫번째 자리수 = 원소 한개인 그룹의 값
    //,면 저장한 앞의 숫자를 숫자들의 합에 더함
    s = s.replace(/[\{\}]+/g,(m)=>m.length > 1?'':',').split(/,{2,}/g)
    s.sort((a,b)=>a.length - b.length)
    let answer = []
    for(let i = 0, len = s.length; i < len; i++){
        const groupOfNumber = s[i] 
        if(i === 0) {
             answer.push(groupOfNumber/1)
             continue
         }
         let sumOfNumber = 0
         let number = ""
         
         for(let j = 0, len = groupOfNumber.length; j < len; j++){
           if(groupOfNumber[j] === ",") {
               sumOfNumber += number/1
               number = ""   
           }
           else number += groupOfNumber[j]
         }
        sumOfNumber += number/1
        s[i] = sumOfNumber
        answer.push(sumOfNumber-s[i-1])
    }
    return answer
}