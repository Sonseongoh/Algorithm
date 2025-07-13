function solution(storey) {
    
    let answer = 0;
    
    while(storey>0){
        let x= storey%10
        let next=(storey/10)%10
        
        if(x<5){
            answer+=x
        }else if(x>5){
            answer+=(10-x)
            storey+=10
        }else{
            if(next>=5){
                answer+=5
                storey+=10
            }else{
                answer+=5
            }
        }
        
        storey=Math.floor(storey/10)
    }
    
    return answer;
}