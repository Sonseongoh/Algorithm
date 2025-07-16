function solution(maps){
    let n = maps[0].length-1
    let m = maps.length-1
    let queue= [[0,0,1]] //x,y,이동거리
    
    while(queue.length){
       let[x,y,move] = queue.shift()
        if(x===n && y===m) return move
        if(maps[y][x]===0) continue
        maps[y][x]=0
        
        if (x-1 >= 0 && maps[y][x-1]) queue.push([x-1,y,move+1]);
        if (x+1 <= n && maps[y][x+1]) queue.push([x+1,y,move+1]);
        if (y-1 >= 0 && maps[y-1][x]) queue.push([x,y-1,move+1]);
        if (y+1 <= m && maps[y+1][x]) queue.push([x,y+1,move+1]);
        
    }
    
    
     return -1;
}




