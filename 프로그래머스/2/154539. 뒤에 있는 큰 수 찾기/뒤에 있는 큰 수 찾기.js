function solution(numbers) {
    let answer = Array(numbers.length).fill(-1)
    let stack=[]
    
    for(let i=0; i<numbers.length; i ++){
        while(stack.length && numbers[stack[stack.length-1]]<numbers[i]){
            let idx = stack.pop()
            answer[idx]=numbers[i]
        }
        stack.push(i)
    }
    
    
    return answer;
}