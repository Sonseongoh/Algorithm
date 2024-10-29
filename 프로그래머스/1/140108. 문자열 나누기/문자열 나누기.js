function solution(s) {
    let cutCount = 0;
    let xCount = 0;
    let anotherCount = 0;
    
    let x=s[0]
        
    for(let i=0; i<s.length; i++){
        if(s[i]===x){
            xCount++
        }else{
            anotherCount++
        }
        
        if(xCount===anotherCount){
            cutCount++
            xCount=0
            anotherCount=0
            x=s[i+1]
        }
    }
   
    
    //마지막 하나 남을 경우 ++
    if (xCount !== 0) {
        cutCount++;
    }
    
    return cutCount;
}

// 1. x를 s[0]으로 설정
// 2. s[1]체크해서 s[0]과 다르다면 cutCount++ , x는 s[2]가 됨
// 3. s[0]과 s[1]이 같다면 xCount++
// 4. xCount 와 anotherCount가 같을때 까지 반복