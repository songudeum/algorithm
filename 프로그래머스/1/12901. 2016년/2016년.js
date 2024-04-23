function solution(a, b) {
    // Date객체로 요일이 일치하면 데이트객체로 풀면 됨
    // let birthday = new Date(2016, 0, 1)
    // console.log(birthday.getDay()) => 6나옴 = 0이 일욜 6이니까 금욜
    const day = new Date(2016,a-1,b)
    return ["SUN","MON","TUE","WED","THU","FRI","SAT"][day.getDay()]
}