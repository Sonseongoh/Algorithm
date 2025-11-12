function solution(record) {
    let answer = [];
    let user={}
    for(let i=0; i<record.length; i++){
        let[inoutChange,id,nickname]=record[i].split(' ')
        if(inoutChange==='Enter'||inoutChange==='Change'){
            user[id]=nickname
        }
        if(inoutChange==='Enter'||inoutChange==='Leave'){
            answer.push([id,inoutChange])
        }
    }
    
     let result=answer.map(([id,inoutChange])=>
         `${user[id]}님이 ${inoutChange==='Enter' ?'들어왔습니다.':'나갔습니다.'}`
     )
    
    return result ;
}