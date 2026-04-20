function solution(a, b) {
    var answer = 0;
    for(let i= Math.min(a,b); i<=Math.max(a,b); i++){
        answer += i
    }
    return answer;
}


//다른 풀이
// function solution(a, b) {
//     let answer =0
//     if(a===b) return a;
//     let small = a < b ? a : b;
//     let big = a > b ? a : b;
//     for(let i = small; i <= big; i++) 
//         answer += i;
//     return answer;
// }