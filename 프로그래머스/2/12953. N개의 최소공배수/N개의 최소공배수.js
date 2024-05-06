function solution(arr) {
    const gcd = (n1,n2) => {
        if(n1%n2) return gcd(n2,n1%n2)
        return n2
    }

    let answer = 1
    for(let i=0;i<arr.length;i++){
        answer = (answer * arr[i])/gcd(answer,arr[i])
    }   
    return answer
}