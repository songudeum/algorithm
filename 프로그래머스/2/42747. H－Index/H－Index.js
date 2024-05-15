function solution(citations) {
    //논문 두 범위로 나뉘는 기준점 h번 이상 인용된게 h편 이상이면서 h번 이하 인용되어야 함
    //먼저 가장 작은값이랑 높은 값의 중간값을 구함
    //중간값을 토대로 중간값보다 큰 원소의 개수를 구해서 중간값과 일치하면 그대로 반환
    //일치하지 않으면 값을 1개씩 낮춰서 일치하는지 확인 후 반환?
    var answer = 0;
    citations.sort((a,b)=>a-b)
    const half = Math.round((citations[0]+citations[citations.length-1])/2)
    for(let i = half; i>0; i--){
        let length = 0
        for(const number of citations){
         if(number >= i) length++   
        }
        if(length >= i) return i
    }
    return answer;
}