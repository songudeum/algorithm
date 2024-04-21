function solution(s) {
    //객체만들기
    const eng = {
        zero:0,
        one:1,
        two:2,
        three:3,
        four:4,
        five:5,
        six:6,
        seven:7,
        eight:8,
        nine:9
    }
    //영단어 일치하는 문자열 찾기
    for (const string in eng){
       while(s.includes(string)){
           s = s.replace(string,eng[string])
       }
    }
    return +s;
//정규식 사용해서 답 정하는거
//string.replace(/(zero)|(one)|(two)....|(nine)/g,(v) => mapStrToNum[v])
}