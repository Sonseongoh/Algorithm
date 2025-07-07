function solution(numbers) {
    let answer = numbers.map(el=>String(el)).sort((a,b)=>(b+a)-(a+b))
    return answer[0] === '0' ? '0' : answer.join('');
}