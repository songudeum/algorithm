function solution(brown, yellow) {
    //가운데가 노란색이고 갈색이 테두리 둘러싸져있는 카펫의 노란색타일과 갈색 타일의 개수를 토대로 가로세로 길이 반환
    //갈색 블록 = 가로*2 + (세로-2)*2 니까 해당 하는 값인지를 확인해서 해당하면 answer에 저장
    var answer = [];
    const sum = brown + yellow
    let column = 3

    while(answer.length !== 2){
        let row = sum / column
        if(row * 2 + (column -2) * 2 === brown){ 
            answer = [row, column]
        } else column++  
    }
    return answer;
}
