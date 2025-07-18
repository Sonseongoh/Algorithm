function solution(word) {
    let answer = 0;
    let alphabet=['A','E','I','O','U']
    let power=[]
    
    for(let i=0; i<alphabet.length; i++){
        let sum=0
        for(let j=i; j<alphabet.length; j++){
            sum+=Math.pow(5,4-j)
        }
        power.push(sum)
    }
    
    for(let i=0; i<word.length; i++){
        let index = alphabet.indexOf(word[i])
        answer+=index * power[i] +1
    }
    
    return answer;
}