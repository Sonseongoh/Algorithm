function solution(lottos, win_nums) {
    let answer = [];
    let maxRank=0
    let minRank=0
    
    let zeroCount=lottos.filter(lotto=>lotto===0).length
    let matchCount=lottos.filter(lotto=>win_nums.includes(lotto)).length
    
    let maxCount=matchCount+zeroCount
    let minCount=matchCount
    
    maxRank=7-maxCount
    minRank=7-minCount
    if(maxRank>6) maxRank=6
    if(minRank>6) minRank=6
    
   

    
    
    return [maxRank,minRank];
}

