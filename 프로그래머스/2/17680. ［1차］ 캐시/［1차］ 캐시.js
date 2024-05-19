function solution(cacheSize, cities) {
    //영문자 대소문자 구분X + cache hit면 1 miss면 5
    //lru = 가장 오랫동안 참조되지 않은 페이지를 교체하는 방식
    //캐시크기만큼 저장하는 배열을 만들어서 새로운 문자열 마주하면 shift하고 push하는 방식으로
    //memorizing은 set으로 만들고 최근 조회는 배열로 해서 배열의 맨앞값을 삭제하는 방식으로
    //문자열들은 소문자로 변경한다음 일치 여부 판단
    //캐시 사이즈 0일 때도 생각해야 함
    //동일한 숫자를 마주했을 때 순서만 갱신되는게 아니라 아예 틀어져버림 ex)2131-> 213에서 31이 되어버리는븅신
    var answer = 0;
    const memorizing  = new Set([]);
    for(let i = 0, len = cities.length; i < len; i++){
        const city = cities[i].toLowerCase();
        if(memorizing.has(city) && cacheSize !== 0){
            answer += 1;
            memorizing.delete(city)
        }
        else {
            answer += 5;
             if(memorizing.size >= cacheSize){
                memorizing.delete([...memorizing][0])
            }
       }
       memorizing.add(city) 
    }
    return answer;
}