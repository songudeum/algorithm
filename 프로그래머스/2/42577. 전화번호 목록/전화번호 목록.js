function solution(phone_book) {
    //한 번호가 다른번호의 접두어인 경우 false 하나도 아니면 true
    //짧은 순으로 정렬 후에 짧은 문자를 map에 저장하고
    //다음 순번으로 돌면서 해당 문자를 하나씩 잘라서 map에 존재하나 체크하고 아니면 저장하는걸 반복
    var answer = true;
    
    phone_book.sort((a,b)=>a.length-b.length)
    
    const slicedBook = new Map()
    
    for(let i = 0, len = phone_book.length; i < len; i++){
        const phoneNumber = phone_book[i]
        for(let j = 0, len2 = phoneNumber.length; j < len2; j++){
            if(slicedBook.has(phoneNumber.slice(0,j+1)))return false
        }
        slicedBook.set(phoneNumber)
    }
    
    return answer;
}