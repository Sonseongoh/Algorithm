function solution(maps) {
    let answer = 0;
    let n=maps.length
    let m=maps[0].length
    let dx=[0,0,-1,1]
    let dy=[-1,1,0,0]
    
    let wholeMap=Array.from({length:n},()=>Array(m).fill(0))
    let queue=[[0,0]]
    wholeMap[0][0]=1
    while(queue.length){
        let[x,y]=queue.shift()
        if(x===n-1 && y===m-1){
            return wholeMap[x][y]
        }
        
        for(let i=0; i<4; i++){
            let nx=x+dx[i]
            let ny=y+dy[i]
            if(nx < n && nx >= 0 && ny >= 0 && ny < m && maps[nx][ny]===1 && wholeMap[nx][ny]===0){
                wholeMap[nx][ny]=wholeMap[x][y]+1
                queue.push([nx,ny])
            }
        
        }
    }
    
    return -1;
}