function solution(answers) {
    var sum = [0,0,0];
    const first = "12345"
    const second = "21232425"
    const third = "3311224455"
    //수포자 답지 만들기
    const numOfQ = answers.length
    const createAnswer = (str)=>{
        const strRepeat = str.repeat(numOfQ > str.length ? numOfQ/str.length + 1 : 1)
        return strRepeat.split("").slice(0,numOfQ)
    }
    const firstA = createAnswer(first)
    const secondA = createAnswer(second)
    const thirdA = createAnswer(third)
    //수포자들의 점수 합산하여 answer에 저장
    for(let i = 0 ; i < answers.length; i++){
        if(firstA[i]==answers[i]){
            sum[0]+=1
        }
        if(secondA[i]==answers[i]){
            sum[1]+=1
        }
        if(thirdA[i]==answers[i]){
            sum[2]+=1
        }
    }
    //제일 높은 점수인 사람 추려서 넣기 엔서에 넣기 만약 동등하면 오름차순
    const max = Math.max(...sum)
    const answer = sum.reduce((acc,cur,idx)=>{
        if(cur === max){
            return [...acc,idx+1]
        }
        return acc
    },[])
    return answer
}