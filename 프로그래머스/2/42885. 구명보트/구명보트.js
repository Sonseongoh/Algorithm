function solution(people, limit) {
    let answer = 0;
    let sortedPeople=people.sort((a,b)=>a-b)
    
    while(sortedPeople.length>0){
        let mostLight=sortedPeople[0]
        let mostHeavy=sortedPeople.pop()
        if(mostLight+mostHeavy<=limit){
            sortedPeople.shift()
        }
        answer++
    }
    return answer;
}