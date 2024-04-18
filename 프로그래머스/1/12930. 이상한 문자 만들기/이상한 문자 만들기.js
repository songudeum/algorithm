function solution(s) {
    var answer = [];
    const wordList = s.split(" ")
    for(let i = 0 ; i<wordList.length; i++){
        let word = ""
        for(let j = 0; j<wordList[i].length; j++){
          word += j%2 === 0 ? wordList[i][j].toUpperCase() : wordList[i][j].toLowerCase()
        }
        answer.push(word)
    }
    return answer.join(" ");
}