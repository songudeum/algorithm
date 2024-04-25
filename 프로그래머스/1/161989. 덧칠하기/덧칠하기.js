function solution(n, m, section) {
    //1미터 길이의 구역을 n개로 나누고 1부터 n번까지 넘버링
    //롤러의 길이 m이고 롤러가 벽 벗어나면 안되고 구역 일부분만 포함되도록 칠하는 것도 금지
    //제일 왼쪽에 있는 구역 + m이 다른 원소들이 포함되는지 체크하고 포함된 애들은 제외
    let paint = 0;
    let answer = 0;
    for(let i =0; i<section.length; i++){
        if(paint < section[i]){
            answer+=1
            paint= section[i] + m - 1
        }   
    }
    return answer;
}