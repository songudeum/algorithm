function solution(numbers) {
    var sum = [];
    //숫자를 모두 더해줌
    for(let i = 0; i<numbers.length-1; i++){
        for(let j = i+1 ; j<numbers.length; j++){
            sum.push(numbers[i]+numbers[j])
        }
    }
    sum.sort((a,b)=>a-b)
    const answer = new Set(sum)
    return [...answer];
}