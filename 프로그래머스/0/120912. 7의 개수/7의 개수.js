function solution(array) {
    let answer = 0;
    let mix = array.join('')
    for(let x of mix){
        if(x==='7') answer++
    }
   
    return answer
}