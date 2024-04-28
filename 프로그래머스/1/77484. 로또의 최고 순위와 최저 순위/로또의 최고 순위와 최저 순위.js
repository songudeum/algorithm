function solution(lottos, win_nums) {
    //알아볼 수 없는 번호 0 -> 이걸로 다 맞을수도 없을수도
    const rank = {
        6 : 1,
        5 : 2,
        4 : 3,
        3 : 4,
        2 : 5,
        1 : 6,
        0 : 6
    }
    //lottos배열에 있는 원소가 win_nums에 몇개 있는지 체크하고 해당 번호들 제외
    const withoutZero = lottos.filter((el)=>el!==0)
    const amountOfZero = 6 - withoutZero.length 
    const matchNumber = win_nums.filter((el)=>withoutZero.includes(el)).length
    //0개수 + 일치개수 = 최고 순위 , 일치개수 = 최저순위
    return [rank[amountOfZero+matchNumber],rank[matchNumber]];
}