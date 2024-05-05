function solution(s){
    //같은 알파벳 2개 붙어있는 짝을 찾고 제거한 다음 이어붙이는 걸 짝이 없어질 때까지 반복
    //완전 다 없어지면 1 아니면 0
    //다음 수랑 일치하지 않으면 인덱스를 배열에 기억하고 다음 인덱스랑 비교했을 때 일치하지 않을경우에만 저장된 인덱스랑 비교? 
    let notMatch = []
        
    for(let i = 0, len = s.length; i < len; i++){
        if(s[i] !== s[i+1]){
            if(notMatch[notMatch.length -1] === s[i]){
                notMatch.pop()
            } else {
                notMatch.push(s[i])
            }
        } else i += 1
    }
    return notMatch.length === 0 ? 1 : 0    
}