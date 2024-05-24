function solution(progresses, speeds) {
    //뒤에 있는 기능이 먼저 되어도 앞기능이 배포될 때 같이 됨
    //각 배포마다 몇개의 기능이 배포되는지
    //Math.ceil(100 - progress / speeds)하면 걸리는 속도
    //맨처음 걸리는 일자를 넣고 그것보다 작은게 나오면 기능수에 +1 
    //큰게 나오면 셌던 기능수 answer에 넣고 큰 값으로 교체하고 다시 반복 맨마지막에 넣어야 함 해당수
    var answer = [];
    let speedOfDay = Math.ceil((100 - progresses[0]) / speeds[0]);
    let amountOfWork = 1;
    for(let i = 1, len = progresses.length; i < len; i++){
        const workingTime = Math.ceil((100 - progresses[i]) / speeds[i]) 
        if(speedOfDay >= workingTime) amountOfWork += 1;
        else {
            answer.push(amountOfWork)
            amountOfWork = 1
            speedOfDay = workingTime
        }
    }
    answer.push(amountOfWork)
    return answer;
}