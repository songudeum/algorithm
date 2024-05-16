function solution(n, left, right) {
    //n번째 행이랑 같은 수면 n.repeat(n), n번째행보다 크면 숫자 하나만 붙음 -> 인간적 사고 ㅗㅗ
    //좌표에서 제일 큰 값에 +1을 하면 해당되는 숫자임
    //y좌표 n나눴을 때의 몫, x좌표는 n으로 나눴을 때의 나머지
    //for문으로 left부터 right까지의 좌표를 구해서 최대값 +1해서 반환
    var answer = [];
    for(let i = left; i <= right; i++){
        const coord = [i % n, Math.floor(i / n)]
        answer.push(Math.max(...coord)+1)
    }
    
    return answer;
}