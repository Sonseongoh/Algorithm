function solution(s) {
    let answer = 0;
    let start=['(', '{', '['];
    let close=[')', '}', ']'];
    
    function isValid(str){
        let stack=[]
        for(let x of str){
            if(start.includes(x)){
                stack.push(x)
            }else{
            let idx=close.indexOf(x)
            if(idx===-1) return false
            if(stack.length===0) return false
            if(stack.pop()!==start[idx]) return false
        }
    }
        return stack.length===0
    }
    
    let arr=s.split('')
      for (let x = 0; x < s.length; x++) {
        if (isValid(arr.join(''))) answer++;
        arr.push(arr.shift());
    }
    return answer;
}