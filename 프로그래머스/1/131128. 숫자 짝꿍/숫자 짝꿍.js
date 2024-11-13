function solution(X, Y) {
    let answer = '';
    let xNum=[]
    let yNum=[]
    for(let num of X){
        xNum.push(num)
    }
    for(let num of Y){
        yNum.push(num)
    }
    
    for(let i=0; i<10; i++){
        let x=xNum.filter((el)=>Number(el)===i).length
        let y=yNum.filter((el)=>Number(el)===i).length
        answer+=String(i).repeat(Math.min(x,y))
    }
    
    
    if(answer==='')  return '-1'
    

    if(Number(answer)===0) return '0'
    
    return answer.split('').sort((a,b)=>(b-a)).join('');
}


//1.두수에서 겹치는 숫자를 뽑는다.
//2. 겹치는 숫자가 없다면 -1,  겹치는 숫자가 0으로만 되어있다면 0