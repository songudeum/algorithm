function solution(want, number, discount) {
    //하루에 하나씩만 할인 제품 구매 가능
    //10일 연속으로 원하는 제품과 수량이 일치하면 회원가입하려고 함
    //10일 단위로 끊고 각 원소마다 want에 해당하는지 체크 없으면 바로 continue
    //10일 단위로 수량을 삭감해서 살 수 있는지 체크 모두 다 0이 되면 살 수 있는 날의 개수 반환
    let answer = 0;
    for(let i = 0, len=discount.length - 10; i <= len; i++){
        const dayList = discount.slice(i,i + 10)
        const numberCopy = [...number]
        for(const item of dayList){
            const index = want.indexOf(item)
            if(!(index+1))break
            if(numberCopy[index] - 1 < 0) break
            numberCopy[index] -= 1
        }
        if(numberCopy.every((number)=>number===0)) answer++
            
    }
    return answer;
}