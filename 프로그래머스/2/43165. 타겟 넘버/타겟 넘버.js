function solution(numbers, target) {
    //덧셈과 뺄셈을 통해 순서를 바꾸지 않고 목표 숫자에 도달하는 방법의 수 반환
    //각 자리수만큼의 덧셈,뺄셈 결과 객체로 저장해서 마지막 자리수에 답이 있는지만 체크
    var answer = 0;
    const results = {}
    const length = numbers.length
    while(numbers.length){
        for(let i = 0; i < length; i++){
            let memo = []
            const number = numbers.shift()
            if(results[i-1]){
                memo = [...(results[i-1].map((result)=>result+number))]
                memo = [...memo, ...(results[i-1].map((result)=>result-number))]
                results[i] = memo
            } else {
                results[i] = [+number,-number]
            }
        }
    }
    return results[length-1].filter((result)=>result===target).length;
}