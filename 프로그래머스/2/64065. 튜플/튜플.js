function solution(s) {
    let answer = [];
    
    let sets=s.replaceAll('{{','').replaceAll('}}','').split('},{').map(n=>n.split(',').map(el=>Number(el)))
    
    sets.sort((a, b) => a.length - b.length);
    
    for(let x of sets){
        for(let el of x){
            if(!answer.includes(el)){
                answer.push(el)
            }
        }
    }
    
    return answer
}