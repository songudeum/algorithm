function solution(nums) {
    var answer = 0;

    for(let i = 0; i < nums.length-2; i++){
        for(let j = i+1; j < nums.length-1; j++){
            for(let k = j+1; k<nums.length; k++){
                const number = nums[i]+nums[j]+nums[k]
                for(let h = 2; h<=number; h++){
                    if(number%h === 0){
                        number === h ? answer+=1 : h+=number
                        
                    }
                }
            }
        }
    }
    
    return answer;
}