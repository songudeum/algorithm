function solution(s) {
    var answer = [];
    //객체 keys에 없으면 추가, 있으면 i-value하고 value를 교체해줌
    const indexObject = {}
    for(let i = 0; i < s.length; i++){
        if(indexObject[s[i]]!=null){
            const distance = i - indexObject[s[i]]
            indexObject[s[i]] = i
            answer.push(distance)
        }
        else{
            indexObject[s[i]] = i
            answer.push(-1) 
        }
    }
    
    return answer;
}