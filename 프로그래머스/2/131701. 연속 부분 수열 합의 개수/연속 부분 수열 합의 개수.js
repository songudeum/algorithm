function solution(elements) {
    //원형 수열로 만들 수 있는 요소들의 합을 중복제외해서 몇개인지
    //원형이다보니 인덱스가 연결되어 있어야 함ex 123 234 512 이런식으로
    //1 ~ elements의 length까지
    //순환하게 될 경우 마지막 원소들 + 0부터 length의 나머지를 사용하면 순환되게 할 수 있음
    
    const duplicatedAnswer = [];
    for(let i = 1, len = elements.length; i <= len; i++){
        for(let j = 0; j < len; j++){
            if(j+i <= len) duplicatedAnswer.push(elements.slice(j, j+i).reduce((acc,cur)=>acc+=cur))
            else duplicatedAnswer.push([...elements.slice(j,len),...elements.slice(0,(j+i)%len)].reduce((acc,cur)=>acc+=cur))
        }
    }
    const answer = new Set(duplicatedAnswer)
    return [...answer].length;
}

