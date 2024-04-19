function solution(sizes) {
    
    const big = Math.max(...sizes.map((el)=>Math.max(...el)))
    const small = Math.max(...sizes.map((el)=>Math.min(...el)))
    return big*small
    //기존 풀이 
    //정렬하고 인덱스1이 가장 큰 걸 뽑는다
    // for(let i = 0; i<sizes.length; i++){
    //     sizes[i].sort((a,b)=>a-b)
    // }
    // let big = []
    // let num = 0
    // sizes.map((el)=>{
    //     if(num<=el[1]){
    //         big = [...el]
    //         num=el[1]
    //     }
    // })
    //인덱스 0이 가장 큰걸 뽑아서 곱한다?
    // let small = big[0]
    // for(let i = 0; i<sizes.length; i++){
    //     if(small <= sizes[i][0]){
    //         small = sizes[i][0]
    //     } 
    // }
    // return small*big[1]
}