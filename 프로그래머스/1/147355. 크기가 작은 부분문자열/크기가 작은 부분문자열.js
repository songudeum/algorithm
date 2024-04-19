function solution(t, p) {
    var answer = 0;
    //slice 0,p.length로 숫자 추출
    for(let i = 0; i<=t.length-p.length; i++){
        //추출한 숫자와 p크기 비교후 answer ++
        if(t.slice(i,i+p.length)<=p){
            answer++
        }
    }
    
    return answer;
}