function solution(food) {
    //food 인덱스0은 그다음인덱스부터는 칼로리 1부터 시작 물을 가운데 두고 좌우대칭하게끔
    //food를 2로나눠서 그만큼 앞뒤로 넣으면 될듯
    let answer = [0]
    for(let i = food.length-1; i>0; i--){
        for(let j = 1; j <= parseInt(food[i]/2); j++){
            answer = [i,...answer,i]
        }
    }
    
    return answer.join("");
}