function solution(maps) {
    let answer = [];
    let n=maps.length
    let m=maps[0].length
    let visited=Array.from({length:n},()=>Array(m).fill(false))
    let dx=[1,-1,0,0]
    let dy=[0,0,1,-1]
    
    function bfs(x,y){
        let queue=[[x,y]]
        visited[x][y]=true
        let sum=Number(maps[x][y])
        
        while(queue.length){
            let [mx,my]=queue.shift()
            for(let i=0; i<4; i++){
                let nx= mx+dx[i]
                let ny= my+dy[i]
                
                if(nx>=0 && nx<n && ny>=0 && ny<m){
                    if(!visited[nx][ny] && maps[nx][ny]!=='X'){
                        visited[nx][ny]=true
                        sum+=Number(maps[nx][ny])
                        queue.push([nx,ny])
                    }
                }
            }
        }
        return sum
    }
    
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(!visited[i][j] && maps[i][j]!=='X'){
                answer.push(bfs(i,j))
            }
        }
    }
    
    
    return answer.length ? answer.sort((a,b)=>a-b) : [-1];
}