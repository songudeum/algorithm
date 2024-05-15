function solution(citations) {
     citations = citations.sort((a,b)=>b-a);
     var i = 0;
     while(i + 1 <= citations[i]){ //0인덱스부터 개수 이상인지 체크
         i++;
     }
     return i;
}