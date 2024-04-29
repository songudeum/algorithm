// function solution(n, lost, reserve) {
//     학생들 번호 체격순, 바로 앞 번호 학생은 바로 뒷 번호의 학생에게만, 체육복 최대한 빌려야 한다
//     전체학생 수 n, 도난당한 학생 번호 배열 lost, 여벌 체육복을 가져온 학생들의 번호가 담긴 reserve
//     여벌 체육복 - 도난당한 학생 = 체육복 못빌려줌
//     여벌체육복이랑 도난당한 학생이 일치하는지 체크해야하고 그 학생 제외해서 도난 학생이랑 +-1 차이에 속하는지
//     근데 +-1 차이가 겹치는지도 확인해야 하기 위해 어떤 친구한테 빌렸는지도 저장해야 함 (여기까지가 탐욕)
//     중복인 요소 제외하고 도난당한애 제외하고 몇명인지 알아내고서 n-lost+중복요소제외대여자
//     대여자가 도난당한애들보다 많은 경우 모두가 체육복 있는걸로 취급해줘야 함
//     한명이 두명한테 대여한 것도 배열에 남으니까 중복 대여의 경우 세줘야 함(초기상태 셋하지 않아서 생긴 잡것)
//     const realLost = lost.filter((el)=> !reserve.includes(el))
//     const realReserve = reserve.filter((el)=> !lost.includes(el))
    
//     let reserver = []
//     for(let i = 0; i < realLost.length; i++){
//        realReserve.includes(realLost[i]+1) && reserver.push(realLost[i]+1)
//        realReserve.includes(realLost[i]-1) && reserver.push(realLost[i]-1) 
//     }

//     const uniqueArr = new Set(reserver)
//     console.log(n, realLost.length, [...uniqueArr].length)
//     return [...uniqueArr].length > realLost.length ? n : n - realLost.length + [...uniqueArr].length
    
// }

//도난자인지 빌려줄수 있는 상태인지가 저장된 배열을 만들기(빌려줄애가 도난당한 상태도 당연히 보이게끔)
function solution(n, lost, reserve) {
    const initStudents = new Array(n).fill(1)
    const students = initStudents.map((el,idx)=>{
        if(lost.includes(idx+1)){
            el--
        }
        if(reserve.includes(idx+1)){
            el++
        }
        return el
    })
    
    for(let i = 0; i < n; i++){
        if(students[i]===0){
            if(i-1 >= 0 && students[i-1] === 2){
                students[i]++
                students[i-1]--
                continue
            }
            if(i+1 < n && students[i+1] === 2){
                students[i]++
                 students[i+1]--
                continue
            }
        }
    }
    
    return students.filter((el)=>el).length
}