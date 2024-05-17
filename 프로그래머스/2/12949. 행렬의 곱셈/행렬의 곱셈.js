function solution(arr1, arr2) {
    var answer = [];
    //for문으로 arr1에 arr2를 가로로 나열한 것들의 세로축을 곱해줌
    //[0][0] * [0][0] + [0][1] * [1][0] + [0][2] * [2][0]
    //위에서 ik * kj의 순으로 반복되는 것 k가 중간 역할자
    for(let i = 0, len = arr1.length; i < len; i++){
        const curArr = arr1[i]
        const result = []
        
        for(let j = 0, len2 = arr2[0].length; j < len2; j++){
            let sumOfMultiple = 0 
            
            for(let k = 0, len3 = curArr.length; k < len3 ; k++){
                sumOfMultiple += curArr[k] * arr2[k][j]
            }
            result.push(sumOfMultiple)
        }
        answer.push(result)
    }
    return answer;
}

