function solution(s, skip, index) {
  //data종류 :  알파벳 사전, 문자열, [스킵하는 문자열], 스킵하는 수
  //알파벳 사전 정의 메소드 > 스킵하는 문자열을 제외한 알파벳 사전을 만들어줘야 함
  //문자열을 변환해주는 자판기(모든 데이터) > 각 문자마다 skip만큼 뒤에 있는 문자를 사전에서 찾아서 출력해줘야 함
    
    return new TransitionMachine(skip).transition(s,index)
}

class AlphabetArray{
    alphabets = "abcdefghijklmnopqrstuvwxyz".split("")
    
    constructor(skip){
    //skip에 든 알파벳마다 alphabets에서 조회해서 동일한 알파벳을 빼주는 배열을 할당해서 넘겨줘야 함
        for(let i = 0; i < skip.length; i++){
            this.alphabets = this.alphabets.filter((alphabet)=>alphabet!==skip[i])
        }
    }
    
    get(){
        return this.alphabets
    }
}

class TransitionMachine{
    result = "";
    alphabetArray;
    
    constructor(skip){
        this.alphabetArray = new AlphabetArray(skip).get()
    }
    
    transition(s, index){
        //문자열자리마다 인덱스만큼 스킵된 문자를 찾아서 result문자열에 더해줘야
        [...s].forEach((string)=>{
            const stringIndex = this.alphabetArray.indexOf(string)
            const skipStringIndex = (stringIndex + index) % this.alphabetArray.length
            this.result += this.alphabetArray[skipStringIndex]
        })
        return this.result
    }
}

