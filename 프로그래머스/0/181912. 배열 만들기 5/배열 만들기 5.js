function solution(intStrs, k, s, l) {
    let answer = [];
    for(let i=0; i<intStrs.length; i++){
        let formatted=Number(intStrs[i].slice(s,s+l))
        if(formatted>k){
            answer.push(formatted)
        }
    }
    return answer;
}