function solution(priorities, location) {    
    let cnt=0
    let queue = priorities.map((pr, idx) => [pr, idx])
    
    while(queue.length>0){
        let cur=queue.shift()
        let hasHigher=queue.some(el=>el[0]>cur[0])
        
        if(hasHigher){
            queue.push(cur)
        }else{
            cnt++
            if(cur[1]===location) return cnt
        }
    }
}