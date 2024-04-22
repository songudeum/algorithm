function solution(n, arr1, arr2) {
    var answer = [];
    //진법 변환은 toString()으로 하고 padStart로 자릿수 맞춰주기 
    const arr1ToString = arr1.map((el)=> el.toString(2).padStart(n,"0"))
    const arr2ToString = arr2.map((el)=> el.toString(2).padStart(n,"0"))
   
    // 지도 비교해서 1은 둘중하나라도 있음 존재하게끔 #추가
    // 0은 둘 다 있어야 추가
    for(let i = 0; i < arr1.length; i++){
        let map = ""
        for(let j = 0; j < n; j++){
            if(arr1ToString[i][j] === "0" && arr2ToString[i][j] === "0"){
                map+=" "
            }
            else{
                map+="#"
            }
        }
        answer.push(map)
    }
    return answer;
}