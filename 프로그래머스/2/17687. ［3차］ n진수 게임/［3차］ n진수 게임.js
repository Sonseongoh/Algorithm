function solution(n, t, m, p) {
    let answer = ''
    let fullSentence=''
    let number=0
    
    while(fullSentence.length<=t*m){
        fullSentence+=number.toString(n).toUpperCase()
        number++
    }
    
    for(let i=0; i<t; i++){
        answer+=fullSentence[p-1+i*m]
    }
    
    
    
    return answer;
}