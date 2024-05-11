function solution(k, tangerine) {
    //귤을 k개 골랐을 때 최대한 다른 수가 없게끔 하고 싶음
    //각 크기별로 몇개가 있는지 파악한 후에 제일 많은 수순으로 k개를 충족시켜서 나오는 종류 수를 반환
    var answer = 0;
    const amount = {}
    for(one of tangerine){
        if(amount[one]) amount[one] += 1
        else amount[one] = 1
    }
    const amountArr = Object.values(amount).sort((a,b)=>b-a)
    let acc = 0
    for(const amount of amountArr){
        if(acc + amount >= k){
            answer++
            break
        }
        else {
            acc+=amount
            answer++
        }
    }
    return answer;
}