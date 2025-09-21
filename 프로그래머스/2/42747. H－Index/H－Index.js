function solution(citations) {
    let answer = 0;
    let max=Math.max(...citations)
    for(let i=0 ; i<max; i++){
        let count= citations.filter(n=>n>=i).length;
        if(count>=i){
            answer=i
        }
    }
    return answer;
}