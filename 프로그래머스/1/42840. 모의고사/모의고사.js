function solution(answers) {
    let answer = [];
    let a=[1,2,3,4,5]
    let b=[2,1,2,3,2,4,2,5]
    let c=[3,3,1,1,2,2,4,4,5,5]
    
    let scores=[0,0,0]
    
    for(let i=0; i<answers.length; i++){
        if(answers[i]===a[i%a.length]) scores[0]++
        if(answers[i]===b[i%b.length]) scores[1]++
        if(answers[i]===c[i%c.length]) scores[2]++
    }
    
    let max= Math.max(...scores)

    
    for(let j=0; j<scores.length; j++){
        if(scores[j]===max){
            answer.push(j+1)
        }
    }
   
    
    return answer;
}


