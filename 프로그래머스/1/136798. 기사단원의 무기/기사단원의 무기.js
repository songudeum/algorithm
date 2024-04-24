function solution(number, limit, power) {
    var answer = 0;
    //1~number까지 숫자 지닌 기사가 본인 번호의 약수 개수에 해당하는 공격력 가진 무기 구매해야 함
    //단 협약 제한수치보다 넘으면 지정 공격력의 무기만 사용해야 함
    //공격력 1당 1키로 철이 필요해서 무기만들 철의 무게 구하는 것
    //number로 1~number까지 숫자들의 약수 개수 구해서 배열에 저장해야 함
    let divisor = new Array(number).fill(0) 
    for(let i = 0; i < divisor.length; i++){
        for(let j =1; j<=Math.sqrt(i+1); j++){
            if((i+1)%j === 0){
                divisor[i]+=1
                if(j !== (i+1)/j){
                    divisor[i]+=1
                }
            }
        }
    }
    
    return divisor.reduce((acc,cur)=>{
        if(cur>limit){return acc+=power}
        else{return acc+=cur}
    })
    
}