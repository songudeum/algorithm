function solution(array, commands) {
    var answer = [];
    //slice로 배열 자르고 인덱스로 뽑기
    for(let i = 0; i<commands.length; i++){
        const command = commands[i]
        const num = array.slice(command[0]-1,command[1]).sort((a,b)=>a-b)
        answer.push(num [command[2]-1])
    }
    return answer;
}