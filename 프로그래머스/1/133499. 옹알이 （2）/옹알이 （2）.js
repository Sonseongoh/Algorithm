function solution(babbling) {
    let word=["aya", "ye", "woo", "ma"]
    let answer = 0;
    
    
    for(let x of babbling){
        for(let y of word){
            if(x.includes(y.repeat(2))){
                break;
            }
            if(x.includes(y)){
                x=x.split(y).join(' ')
            }   
        }
         if (x.trim() === '') {
            answer++;
        }
        
    }
    
    return answer;
}

//1.word 단어를 연속으로 2번 포함하면 break
//