function solution(n) {
    var answer = 0;
    //n번째 피보나치 수를 1234567 나눈 나머지 리턴(n은 2이상)
    //for문으로 파보나치 수를 재현해서 n까지 해서 1234567로 나눈 나머지를 answer에 할당
    //인덱스에 맞게 피보나치 수를 배열에 저장하고 length가 n에 도달하면 멈추고 계산하는 방식으로
    //분배법칙=a의 수를 나눈 나머지랑 b의 수를 나눈 나머지를 합해서 다시 나머지를 구하면 두수를 합해서 나눈 나머지랑 똑같다
    let sumResult = [0,1]
    for(let i = 2; i <= n; i++){
        if(i === n){
            answer = (sumResult[i-1] + sumResult[i-2]) % 1234567
        }
        else sumResult.push(sumResult[i-1] + sumResult[i-2] % 1234567)
    }
    return answer;
}