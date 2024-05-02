function solution(A,B){
//두 배열에서 원소 하나씩 뽑아 곱하고 더한 것을 누적한 값이 최소가 되도록
//한 배열은 오름차순 정렬하고 다른 배열은 내림차순 정렬해서 인덱스에 맞게 곱해서 누적하면 됨    
    var answer = 0;
    const Asorted = A.sort((a,b)=>a-b)
    const Bsorted = B.sort((a,b)=>-(a-b))      
    
    for(let i = 0, len = A.length; i < len; i++){
        answer += Asorted[i] * Bsorted[i]
    }

    return answer;
}