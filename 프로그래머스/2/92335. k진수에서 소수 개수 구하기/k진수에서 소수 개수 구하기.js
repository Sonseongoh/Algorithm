function isPrime(num){
    if(num<=1){
        return false
    }
    if(num===2){
        return true
    }
    if(num%2===0){
        return false
    }
    let sqrt=Math.sqrt(num)
    for (let i = 3; i <= sqrt; i += 2) {
        if (num % i === 0) return false;
    }
    return true
    
}

function solution(n, k) {
    let answer = 0;
    let StringNum = n.toString(k)
    let StringNumArr=StringNum.split('0')
    for(let x of StringNumArr){
        if(isPrime(Number(x))) answer++
    }
    
    return answer;
}