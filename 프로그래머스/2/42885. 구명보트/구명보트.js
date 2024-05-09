function solution(people, limit) {
    //2명탈 수 있고, 제한 limit키로 구명보트 횟수 최대한 적게 반환
    //몸무게를 무거운 순으로 정렬하고 태운 다음 제일 가벼운 애를 태울 수 있는지
    //최적의 선택을 할 수 있냐 없냐가 greedy 
    people.sort((a,b)=>b-a)
    var answer = 0;
    for(let i = 0; i < people.length; i++){
        answer += 1
        if(people[i] === limit) continue
        else {
            if(people[i] + people[people.length -1] <= limit){
                people.pop()
            }
        }
    }
    
    
    return answer;
}