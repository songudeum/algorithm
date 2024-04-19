function solution(s, n) {
    var answer = '';
    const lower = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
    const upper = lower.toUpperCase()
    for(let i =0; i<s.length; i++){
        //인덱스를 찾아서 수만큼 더하고 빼내는 방식으로
        if(lower.includes(s[i])){
            let index = lower.indexOf(s[i])
            answer += lower[index+n]
        }
        if(upper.includes(s[i])){
            let index = upper.indexOf(s[i])
            answer += upper[index+n]
        }
        if(s[i]===" "){
            answer+=" "
        }
        
    }
    return answer;
}