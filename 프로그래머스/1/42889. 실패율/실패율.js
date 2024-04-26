function solution(N, stages) {
    var answer = {};
    //실패율 = 스테이지 도달했으나 클리어 못한 사람수 / 도달한 사람
    //N = 전체 스테이지 개수 N+1 마지막 스테이지까지 클리어한 사용자
    //stages = 사용자가 현재 멈춰있는 스테이지 번호가 담긴 배열
    //실패율이 높은 스테이지부터 내림차순 같으면 작은스테이지가 먼저오게
    //해당 스테이지인 사람 수를 세고 스테이지보다 높은 수를 세서 나눠야 하는데..    
    stages.sort((a,b)=>a-b)
    
    for(let stage = 1; stage<=N; stage++){
        let stuck = 0;
        let clear = 0;
        for(let i = 0; i<stages.length; i++){
            if(stage === stages[i]){
                stuck+=1
            }
            if(stages[i] > stage){
                clear+=1
            }
        }
        clear+stuck === 0 ? answer[stage] = 0 : answer[stage] = (stuck/(clear+stuck))
    }
    
    const a = Object.keys(answer).sort((a,b)=>{
        if(answer[a]>answer[b]){
            return -1
        }
        else if(answer[a]<answer[b]){
            return 1
        }
        else {
            return +a > +b ? 1 : -1
        }
    })
  
    return a.map((el)=>+el)
}