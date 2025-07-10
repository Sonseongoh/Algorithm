function solution(number, k) {
    let stack=[]
    for(let i=0; i<number.length; i++){
        while(stack[stack.length-1]<number[i] && k>0){
            stack.pop()
            k--
        }
        stack.push(number[i])
    }
    
    while(k>0){
        stack.pop()
        k--
    }
    
    
    return stack.join('');
}