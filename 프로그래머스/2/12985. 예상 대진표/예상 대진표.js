function solution(n,a,b){
    //1번부터 N번까지 짝지어서 게임 진행하고 앞순번부터 이긴사람들은 다시 번호가 붙음
    //a번 참가자랑 b번 참가자는 몇 번째 라운드에서 만나는지 찾아서 반환
    //Math.ceil(n/2) 다음 라운드 번호고 Math.ceil(n/2)값이 동일해질 때가 만나는 라운드  
    let copyA = a
    let copyB = b
    let round = 1
    while(Math.ceil(copyA / 2) !== Math.ceil(copyB / 2)){
        copyA = Math.ceil(copyA / 2)
        copyB = Math.ceil(copyB / 2)
        round++
    }   
    
    return round;
}