function solution(name, yearning, photo) {
    var answer = [];
    //for문 2개로 사림의 인덱스 찾아서 합산하면될듯
    for(let i = 0; i < photo.length; i++){
        let sum = 0
        for(let j = 0; j < photo[i].length; j++){
            for(let k = 0; k < name.length; k++){
                photo[i][j] === name[k] ? sum+= yearning[k] : sum+=0 
            }
        }
        answer.push(sum)
    }
    return answer;
}