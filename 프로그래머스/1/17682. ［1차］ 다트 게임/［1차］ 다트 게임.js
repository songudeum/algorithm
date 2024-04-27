function solution(dartResult) {
    //S=^1 D=^2 T=^3 *=해당*2,바로전 점수*2 #=-해당점수 *은 중첩가능 마이너스에서도
    //SDT는 점수마다 하나씩, * #은 점수마다 둘 중하나 존재 or 존재X
    //다음 숫자 이전까지가 해당 스테이지 점수
    //2인덱스 3인덱스를 알아내서 잘라내고 각인덱스별로 계산해서 저장하게끔
    let answer = [0,0,0]
    let score = ""
    let index = -1
    for(let i = 0; i < dartResult.length; i++){
        let cur = dartResult[i]
        if(!isNaN(cur)){
            score = ""    
            if(!isNaN(dartResult[i+1])){
                score = cur + dartResult[i+1]
                i += 1
            }
            else{
                score = cur
            }
            index+=1
        }else{    
        score = +score
        if(cur === "S"){
            answer[index] += score
        }
        if(cur === "D"){
            answer[index] += Math.pow(score,2)
        }
        if(cur.includes("T")){
            answer[index] += Math.pow(score,3)
        }
        if(cur.includes("*")){
            answer[index] *= 2
            answer[index-1] *= 2
        }
        if(cur.includes("#")){
            answer[index] = -answer[index]
        }
    }
       
    }   
   
   return answer.reduce((acc,cur)=>acc+cur) 
}