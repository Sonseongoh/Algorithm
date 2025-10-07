function solution(N, stages) {
    let answer = [];
    
    for(let i=1; i<N+1; i++){
        let trial=0
        let pass=0
        for(let j=0; j<stages.length; j++){
            if(stages[j]>i){
                pass++
            }
            if(stages[j]>=i){
                trial++
            }
        }
        
        let failure=1-(pass/trial)
        answer.push([i,failure])
    }
    answer.sort((a,b)=>b[1]-a[1])
    return answer.map(el=>el[0]);
}