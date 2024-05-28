function solution(str1, str2) {
    //문자열을 2개씩 자르고 정규식으로 문자인 것만 걸러낸 후 객체로 저장
    //저장된 문자열들의 요소들을 배열에 담고 reduce로 합집합 교집합 개수를 셈
    //합집합의 경우 math.max로 만약 둘다 원소를 가지고 있다면 더 큰게 저장되게끔
    //교집합의 경우 math.min으로 둘다 원소 가지고 있으면 더 작은게 저장되게끔
    //모든 요소를 돌기때문에 둘다 math의 유무에 아무 상관이 없음
    //특히 교집합은 둘다 없거나 둘 중 하나가 요소가 없음 min은 0이어서 상관이 없음
    let map1 = {}    
    for(let i = 0, len = str1.length; i < len -1; i++){
            str1 = str1.toLowerCase()
            const slice = str1.slice(i,i+2)
            if((/^[a-z]+$/g).test(slice)){
                map1[slice] = (map1[slice] ?? 0) + 1
            }
    }
    
    let map2 = {}
    for(let i = 0, len = str2.length; i < len -1; i++){
            str2 = str2.toLowerCase()
            const slice = str2.slice(i,i+2)
            if((/^[a-z]+$/g).test(slice)){
                map2[slice] = (map2[slice] ?? 0) + 1
            }
    }
    
    const key1 = Object.keys(map1)
    const key2 = Object.keys(map2)
    const keys = Array.from(new Set([...key1, ...key2]))
   
    if(!keys.length) return 2**16
    
    const intersect = keys.reduce((acc,cur)=> acc + Math.min(map1[cur] ?? 0 , map2[cur] ?? 0)
    ,0)
    
    const union = keys.reduce((acc,cur)=> acc + Math.max(map1[cur] ?? 0 , map2[cur] ?? 0)
    ,0)

    return Math.floor((intersect / union) * (2**16))
}