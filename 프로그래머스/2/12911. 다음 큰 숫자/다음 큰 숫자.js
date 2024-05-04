function solution(n) {
    //n의 다음 큰 숫자는 n보다 크면서 n은 2진수로 변환했을 때의 1의 개수가 같은 것 중 가장 작은 수
    //answer이 빈문자열일때까지 while문을 돌려서 2진수의 1개수가 같은 숫자를 찾아내고 반환
    //1만 남기도록 filter해서 length비교 후 같으면 answer에 할당
    let answer = ""
    let number = n+1
    while(answer === ""){
        const nArr = [...n.toString(2)].filter((num)=> num === "1")
        const numberArr = [...number.toString(2)].filter((num)=> num === "1")
       
        if(nArr.length === numberArr.length){
            answer = number
        } else number++
    }
    
    return answer;
}