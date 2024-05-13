function solution(s){
    let answer = 0

    const open = ['(','{','[']
    const close = [')','}',']']

    for(let i=0,len=s.length;i<len;i++){
        const target = s.substring(i,s.length)+s.substring(0,i)

        const stack = []

        for(let j=0,len=s.length;j<len;j++){
            const curr = target[j]

            const isClose = close.indexOf(curr)

            if(isClose+1){
                if(stack.length && open.indexOf(stack[stack.length-1]) === isClose){
                stack.pop()
                continue
            }
            stack.push(curr)
            break
            }

        stack.push(curr)
    }

        if(!stack.length) answer++
    }

    return answer
}