function solution(lines) {
    let answer = 0;
    let offset=100
    let array=Array(201).fill(0)
    
    for(let [a,b] of lines){
        for(let x=a; x<b; x++){
            array[x+offset]+=1
        }
    }
    
    for(let x of array){
        if(x>=2){
            answer++
        }
    }
    
    
    
    return answer;
}