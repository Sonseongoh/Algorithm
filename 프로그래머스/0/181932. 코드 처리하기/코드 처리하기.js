function solution(code) {
    let ret = '';
    let mode=0
    for(let idx=0; idx<code.length; idx++){
        if(code[idx]==='1'){
            mode = mode === 0?1:0
        }else if((mode===0 && idx%2 == 0) ||(mode==1 && idx%2!==0)){
            ret+=code[idx]
        }
        
    }
    return ret.length===0?'EMPTY':ret;
}