function solution(a, b, n) {
    var answer = 0;
    //n에 근접한 a*비례 숫자를 n/a로 구하고 n-a*비례+b*비례 계산하고 b*비례는 answer에 더하기
    //n-a*비례+b*비례의 값이 a보다 작아질 때까지 계속 함
    let bottle = n
    while(a <= bottle){
        const num = Math.floor(bottle / a)
        bottle = bottle - a*num + b*num
        answer += b*num
    }
    return answer;
}