function solution(strings, n) {
    //strings배열 원소들의 [n] 자리를 중심으로 오름차순이니까
    //sort에서 a b 자리에 넣음 될지도
    //기존 풀이
    // const answer = strings.sort((a,b)=>{
    //     if(a[n] > b[n] )return 1;
    //     if(a[n] < b[n] )return -1;
    //     if(a[n] === b[n]){
    //         if(a>b) return 1;
    //         if(a<b) return -1;
    //         if(a===b) return 0;
    //     }
    // })
    // return answer;

    //t면 1 f면 0인 것을 이용해서 sort쉽게
    return strings.sort((a, b) => {
        const chr1 = a.charAt(n);
        const chr2 = b.charAt(n);

        if (chr1 == chr2) {
            return (a > b) - (a < b);
        } else {
            return (chr1 > chr2) - (chr1 < chr2);
        }
    })
}
