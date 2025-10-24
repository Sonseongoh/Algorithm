function solution(name) {
    let answer = 0;
    let alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    
    for(let i=0; i<name.length; i++){
        let idx=alphabet.indexOf(name[i])
        let up=idx
        let down=26-idx
        answer+=Math.min(up,down)
    }
    
    let move= name.length-1
    
    for(let i=0; i<name.length; i++){
        let next=i+1
        while(next<name.length && name[next]==='A') next++
        move=Math.min(move, i + name.length - next + Math.min(i, name.length - next))
    }
    
    return answer+move;
}