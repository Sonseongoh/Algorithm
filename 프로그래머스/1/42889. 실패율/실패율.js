function solution(N, stages) {
    let answer = [];
    
    
    for(let i=1; i<N+1; i++){
        let trial=0;
        let pass=0;
        for(let j=0; j<stages.length; j++){
             if(stages[j]>=i){
                trial++
            }
             if(stages[j]>i){
                pass++
            }
        }
            answer.push([1-(pass/trial),i])
    }
    
    answer.sort((a,b)=>b[0]-a[0])
    return answer.map(el=>el[1])
}

//answer의 answer[0][k] 를 비교해서 큰순으로 정렬 
