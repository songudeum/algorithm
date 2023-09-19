//문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수,
//solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고
//"1234"라면 True를 리턴하면 됩니다.
function solution(s) {
    let answer = false;
    //정규식 통해서 숫자인지만 체크
    let reg = /^[0-9]*$/;
    //길이가 4 or 6인지 체크 후 정규식 통과하면 answer값 true로
    if (s.length === 4 || s.length === 6) {
        return reg.test(s) ? (answer = true) : answer;
    }
    return answer;
}

//정규식이 하나의 문장에 하나의 정규식만 가능하다 생각하여
//4 or 6의 길이 체크까지 정규식에 담는 것 생각못했는데 4 or 6의 길이까지 담음 더 쉽게 풀림
function alpha_string46(s) {
    var regex = /^\d{6}$|^\d{4}$/;

    return regex.test(s);
}
// ^랑 $는 줄의 시작과 끝을 나타내는 것
// \d{6} = 6자리숫자
