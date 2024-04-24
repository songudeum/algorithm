function solution(n, m) {
    const divisorMaker= (number) =>{
        let divisor = []
        for(let i = 1; i<=Math.sqrt(number); i++){
            if(number%i === 0){
                divisor.push(i)
                if(i !== number/i){
                    divisor.push(number/i)
                }
            }
        }
        return divisor.sort((a,b)=>a-b)
    }    
    const nDivisor = divisorMaker(n)
    const mDivisor = divisorMaker(m)
    const sameDivisor = []
    for(let i = 0; i<nDivisor.length; i++){
        for(let k=0; k<mDivisor.length; k++){
            if(nDivisor[i] === mDivisor[k])sameDivisor.push(nDivisor[i])
        }
    }
    const maxDivisor = sameDivisor.sort((a,b)=>a-b).pop()
    const minMultiple = n/maxDivisor * m/maxDivisor * maxDivisor
    return [maxDivisor, minMultiple];
}
