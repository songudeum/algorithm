function solution(priorities, location) {
    //큐에서 꺼냈는데 우선순위가 높은게 있다면 그걸 꺼내고 다시 집어넣음
    //이렇게 돌아가는 방식에서 인덱스로 지정한 프로세스가 몇번째 때 실행되는지 반환
    //쌓이는 배열 안에 있는 인덱스가 갖고있는 우선순위보다 작은 경우만 스택에 저장하고 해당 값 shift처리
    //만약 우선순위가 큰걸 마주한다면 스택 다 비우고 해당 순번부터 다시 저장하고 이전값들을 다시 push해줌
    //위의 과정을 while문으로 주어진배열과 stack의 길이가 동일할 때까지 반복 후 스택에서 해당 인덱스의 인덱스 구함 됨
    var answer = 0;
    let indexOfPriorities = priorities.map((priority,idx)=>priority=idx)
    do{
        const biggest = Math.max(...priorities)
        if(priorities[0] < biggest){
            priorities.push(priorities.shift())
            indexOfPriorities.push(indexOfPriorities.shift())
            continue
        }
        answer++
        priorities.shift()
        if(indexOfPriorities.shift() === location) return answer
    }
    while(indexOfPriorities.length)
}