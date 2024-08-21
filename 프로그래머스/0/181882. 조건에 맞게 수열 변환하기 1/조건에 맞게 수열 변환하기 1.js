function solution(arr) {
    let answer = [];
    for(let x of arr){
        if(x>=50 && x%2===0){
        x= x/2
        }else if(x<50&&x%2===1){
        x= x*2
        }
       
        answer.push(x)
    }
    return answer;
}