function solution(n) {
    var answer = 0;
    //소수(자기랑 자기자신만 나누어지는 수)를 구하고 answer에 더하는 방식으로
    const arr = new Array(n+1).fill(true)
    arr[0] = false
    arr[1] = false
    for(let i = 2; i * i <= n; i++){
        if(arr[i]){
          for(let j = i * i; j <= n; j+=i){
              arr[j] = false
          }           
        }   
    }
    return arr.filter((el)=>el).length
}