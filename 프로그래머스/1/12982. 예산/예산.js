function solution(d, budget) {
    var answer = 0;
    //배열을 숫자가 작은순부터 정렬
    const dSort = d.sort((a,b)=>a-b)
    //budget보다 작거나 같을 때까지 원소를 하나씩 더하면서 answer에도 하나씩 더함
    let money = 0
    for(let i=0; i<d.length; i++){
        money+=dSort[i]
        if(money<=budget){
            answer+=1
        }
        if(money>budget){
            break
        }
    }
    return answer;
}