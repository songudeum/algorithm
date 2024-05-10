function solution(n, words) {
    var answer = [];
    //중복하는 원소가 있는지 체크해야하고 앞에서 뭐라고 끝났는지 저장해서 비교해야 함
    //그래서 끝나는 지점의 인덱스를 구해서 %해서 0이면 n-1이고 나머지숫자는 그 순번인 사람
    //그냥 나누고 math.floor + 1한 것은 차례
    let nextword = words[0][words[0].length -1]
    let already = [words[0]]
    for(let i = 1,len = words.length; i < len; i++){
        if(already.includes(words[i])){
            answer = [i % n + 1, Math.floor(i / n) + 1]
            break
        }
        if(nextword === words[i][0]){
            already.push(words[i])
            nextword = words[i][words[i].length-1]
            continue
        } else {
            console.log(1)
            answer = [i % n + 1, Math.floor(i / n) + 1]
            break
        }
    }
    return answer.length === 0 ? [0,0] : answer
}