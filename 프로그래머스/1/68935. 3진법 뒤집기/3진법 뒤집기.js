function solution(n) {
    const a = n.toString(3)
    const b = a.split("").reverse().join("")
    var answer = parseInt(b,3)
    return answer;
}