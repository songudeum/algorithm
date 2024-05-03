function solution(s) {
    var answer = '';
    //첫문자는 대문자고 나머진 소문자
    //공백 기준으로 split하고 맨 앞문자가 문자형인지를 판단
    //문자형이면 대문자로 바꾸고 나머지 문자열을 소문자로 바꾼 것과 합쳐서 다시 넣어줌
    const sArr = s.split(" ")
    for(let i = 0, len = sArr.length; i < len; i++){
        const firstWord = sArr[i][0] 

        if(typeof firstWord === "string"){
             sArr[i] = firstWord.toUpperCase() + sArr[i].slice(1).toLowerCase()  
         } 
    }
    return sArr.join(" ");
}