function solution(k, score) {
    var answer = [];
    //k까지 score를 쌓고 그게 넘을 때마다 꼴지와 비교해서 방출 + 추가를 하거나 유지한다
    let glory = []
    for(let i =0; i<score.length; i++){
        if(glory.length < k) {
            glory.push(score[i])
            glory.sort((a,b)=>a-b)
            answer.push(glory[0])
        }
        else {
            if(glory[0] < score[i]){
                glory.shift()
                glory.push(score[i])
                glory.sort((a,b)=>a-b)
                answer.push(glory[0])
            }
            else{
                answer.push(glory[0])
            }
        }
    }
    return answer;
}