function solution(k, m, score) {
    var answer = 0;
    //사과 1~k점까지의 등급 있음 상자에 담긴 가장 낮은 사과등급*m(담긴사과개수)으로 가격 취급됨
    //최대이익만 남기게끔 사과는 상자단위로만 판매하고 남는사과 버림
    //높은순으로 정렬하기
    const sortedScore = score.sort((a,b)=>-(a-b))
    //높은순으로 정렬된 배열에서 인덱스 = m-1 * score/m 자리가 상자에 담기는 마지막 사과니까 m곱해서 합산
    for(let i = 1; i<=score.length/m; i++){
        answer += sortedScore[(m*i)-1] * m
    }
    
    return answer;
}