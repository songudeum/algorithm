function solution(arr1, arr2) {
    var answer = [];
    //for문으로 더할 배열들 고르기
    for(let i = 0; i<arr1.length; i++){
        let sumArr = []
        for(let j=0; j<arr1[0].length; j++){
            sumArr.push(arr1[i][j]+arr2[i][j])
        }
        answer.push(sumArr)
    }
    //고른 배열들의 0인덱스 더하기
    //빈 배열에 더한 순서대로 넣기

    return answer;
}
