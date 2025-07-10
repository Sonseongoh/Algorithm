function solution(weights) {
    weights.sort((a,b)=>b-a)
    
    const cache={}
    let answer = 0;
    for(let w of weights){
        let m;
        
        if(cache[w]){
            answer+=cache[w]
        }
        
        m=w*3/2
        if(cache[m]){
            answer+=cache[m]
        }
        
        m = w * 2;
        if (cache[m]) {
            answer += cache[m];
        }
        
         m = w * 4 / 3;
        if (cache[m]) {
            answer += cache[m];
        }
        
        if(!cache[w]) cache[w]=1
        else cache[w]++
    }
    
    
    return answer;
}