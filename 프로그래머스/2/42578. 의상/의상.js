// function solution(clothes) {
//     //의상전체가 겹치는게 아니면 다른 방법으로 입었다고 취급
//     //의상의 종류가 같은 것끼리 묶고 그 숫자 구해야 함 나머지 종류들과 곱한 것 + 각각 하나씩 쓰는 개수
//     //의상종류 : 개수의 형태로 객체를 만들어서 for문 동안 개수 센 다음에 마지막에 곱하고 더하는 식으로
//     //단 종류가 하나면 그냥 그 수 반환하는 걸로
//     //옷을 전부 걸쳐야하는게 아니라 하나이상 걸칠 수 있음
//     const clothList = {}
//     for(let i = 0, len = clothes.length; i < len; i++){
//         const category  = clothes[i][1]
//         clothList[category] ? clothList[category] += 1 : clothList[category] = 1
//     }
    
//     const amountOfCloth = Object.values(clothList)
//     if(amountOfCloth.length === 1) {
//         return amountOfCloth.pop()
//     }
//     else{
//         return amountOfCloth.reduce((acc,cur)=>acc*=cur,1) + clothes.length    
//     }
// }
function solution(clothes) {
    const item = {}
    for(const [_,kind] of clothes){
        if(!item[kind]) item[kind] = 0
        item[kind]++
    }
    
    let answer = 1
    for(const count of Object.values(item)){
        answer *= (count+1)
    }
    return answer-1
}

// function solution(clothes){
//     const item = {}
//     for(const [_,kind] of clothes){
//         if(!item[kind]) item[kind] = 0
//         item[kind]++
//     }
    
//     const kinds = Object.keys(item)
    
//     const answer = []
    
//     for(let i=0,len=kinds.length;i<len;i++){
//         answer[i] = []
//         for(let j=0,lenJ=item[kinds[i]];j<lenJ;j++){
//             if(i===0){
//                 answer[i][j]=j+1
//             } else {
//                 if(j===0){
//                     answer[i][j] = answer[i-1][answer[i-1].length-1]*2+1
//                 } else {
//                     answer[i][j] = answer[i][j-1]+answer[i-1][answer[i-1].length-1]+1
//                 }
//             }
//         }
//     }
    
//     return answer[answer.length-1][answer[answer.length-1].length-1]
// }
