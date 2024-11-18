function solution(dirs) {
    let direction={
        'U':[0,1],
        'D':[0,-1],
        'R':[1,0],
        'L':[-1,0]
    }
    
    let nowX=0
    let nowY=0
    let visitedPaths=new Set()
    
    for(let dir of dirs){
        let [dx,dy]=direction[dir]
        let nextX=nowX+dx
        let nextY=nowY+dy
        if(nextX>5||nextY>5||nextX<-5||nextY<-5){
            continue;
        }
        let path1=`${nowX},${nowY},${nextX},${nextY}`
        let path2=`${nextX},${nextY},${nowX},${nowY}`
        visitedPaths.add(path1);
        visitedPaths.add(path2);
        
        nowX=nextX
        nowY=nextY
    }
    
    
    return (visitedPaths.size)/2
}