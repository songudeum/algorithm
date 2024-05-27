function solution(k, dungeons) {
    //각 던전마다 최소 필요 피로도랑 소모 피로도 필요
    //순서 상관없이 가장 많이 탐험할 수 있는 던전 수 반환
    //완전 탐색은 모든 조합을 다 도는 것 vs 그리드는 최선의 행위를 계속 찾는 것
    //완전탐색 스택(dfs)을 이용해서 먼저 초기 상태를 설정해준 다음에 각 단계별로 던전 돈 결과를 쌓고
    //돈 던전은 배열에서 꺼내고 다시 돌게끔 설정
    //pop으로 꺼내서 다음 던전을 가서 막히면 다시 1단계 던전 스택을 이용하고 그런 식으로
    let answer = 0
    
    const stack = [
        {
            k,
            dungeons,
            depth : 0
        }
    ]
    
    while(stack.length){
        const {k,dungeons,depth} = stack.pop()
        
        if(dungeons.length === 0) return depth
        
        for(let i = 0, len = dungeons.length; i < len; i++){
            if(dungeons[i][0] <= k){
                stack.push({
                    k : k-dungeons[i][1],
                    dungeons: [...dungeons.slice(0,i),...dungeons.slice(i+1)],
                    depth : depth+1
                })
                continue
            }
            
            answer = Math.max(answer, depth) 
        }
    }
    return answer
    
}