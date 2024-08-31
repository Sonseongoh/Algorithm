function solution(rank, attendance) {
    let answer = []
    for(let i=0; i<rank.length; i++){
        if(attendance[i]){
            answer.push(rank[i])
        }
    }
    answer.sort((a,b)=>a-b)
    
    let sortedRank= answer.map(el=>rank.indexOf(el))
    
    
    return sortedRank[0]*10000 + sortedRank[1]*100 + sortedRank[2];
}


