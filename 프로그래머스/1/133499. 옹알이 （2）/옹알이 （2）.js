function solution(babbling) {
    var answer = 0;
    //"aya" "ye" "woo" "ma" 4*4 조합 발음만 가능하고 연속같은 발음X
    //맨앞 단어가 aywm에 속하는지 체크해서 속하면 해당 단어 수만큼 자르고 비교
    //비교해서 단어랑 일치하면 자르고 남은 단어도 맨앞자리 비교 후 동일하게 (단 바로 앞단어와 똑같으면 버림
    const wordList = {"a":"aya",
                      "y":"ye",
                      "w":"woo",
                      "m":"ma"}
    for(let i = 0; i < babbling.length; i++){
        let word = babbling[i]
        
        let beforeWord = ""
        
        const translator = (word)=>{
        if(wordList[word[0]]){
            if(wordList[word[0]].length === 3 && beforeWord !== word[0]){
                if(word.slice(0,3) === wordList[word[0]]){ 
                    if(word.slice(3) === ""){
                        return true                      
                    }
                    beforeWord = word[0]
                    return translator(word.slice(3))
                }
            }
            else if(wordList[word[0]].length === 2 && beforeWord !== word[0]){
                 if(word.slice(0,2) === wordList[word[0]]){ 
                    if(word.slice(2) === ""){
                        return true                      
                    }
                    beforeWord = word[0]
                    return translator(word.slice(2))
                
                }             
            }
        }
        else return false    
      }
        translator(word) ? answer+=1 : answer+=0
    }   
    return answer;
}