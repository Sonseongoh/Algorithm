function solution(x, y, n) {
    let queue=[[x,0]]
    let head = 0; 
    let visited= Array(y+1).fill(false)
    visited[x]=true
    
    while(head < queue.length){
        let [current, count] = queue[head++];
        if(current===y) return count
        let nexts=[current+n,current*2,current*3]
        for(let next of nexts){
            if(next<=y && !visited[next]){
                visited[next]=true
                queue.push([next,count+1])
            }
        }
    }
    
    return -1;
}