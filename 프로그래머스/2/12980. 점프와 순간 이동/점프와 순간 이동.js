function solution(n){
    //한번에 k칸 앞으로 점프(배터리 k만큼 줄어듦) or 현재까지 온 거리 *2 위치로 순간이동
    //구매자가 이동하려는거리 N이 주어졌을 때 사용해야하는 건전지 최솟값
    //2를 나눠서 나머지가 0이 아닌 애들의 개수가 점프 횟수가 되나? 나머지 0아니면 내림하고 다시 나눔
    let copyN = n
    let jump = 0
    while(copyN !== 1){
        if(copyN % 2 === 0){
            copyN = copyN / 2
        }else{
            copyN = Math.floor(copyN / 2)
            jump++
        }
    }
    
    return jump+1;
}