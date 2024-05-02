function solution(s) {
    //공백으로 구분된 숫자들 중 최소값과 최대값 찾아 문자열로 반환
    //공백을 기준으로 배열로 만든 후에 오름차순 sort해서 반환
    const sArr = s.split(" ").sort((a,b)=>-(a-b))
    return sArr[(sArr.length) - 1] + " " +sArr[0];
}