function solution(skill, skill_trees) {
    let answer=0
    let skills=skill.split('')
    for(let skill of skill_trees){
        let filtered=skill.split('').filter(el=>skills.includes(el))
        let valid=true
        for(let i=0; i<filtered.length; i++){
            if(filtered[i]!==skills[i]){
                valid=false
            }
        }
        if(valid) answer++
    }
    
    return answer
}

//1. skill의 첫글자로 시작해야함