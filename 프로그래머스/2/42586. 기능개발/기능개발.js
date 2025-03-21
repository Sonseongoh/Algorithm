function solution(progresses, speeds) {
    let answer = [];
    
    let x = progresses.map((el,i)=>Math.ceil((100-el)/speeds[i]))
    console.log(x)
    let max = x[0]
    let cnt =0
    
    for(let i=0; i<x.length; i++ ){
        if(x[i]<=max){
            cnt++
        }else{
            max=x[i]
            answer.push(cnt)
            cnt=1
        }
    }
    answer.push(cnt)
    
    
    return answer;
}