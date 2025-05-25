function solution(k, dungeons) {
    let answer = 0;
    let visited=new Array(dungeons.length).fill(false)
    
    function dfs(crtK,count){
        answer=Math.max(count,answer)
        for(let i=0; i<dungeons.length; i++){
            let [min,cost]=dungeons[i]
            if(!visited[i]&&crtK>=min){
                visited[i]=true
                dfs(crtK-cost,count+1)
                visited[i]=false
            }
        }
    }
    
    dfs(k,0)
    
    return answer;
}