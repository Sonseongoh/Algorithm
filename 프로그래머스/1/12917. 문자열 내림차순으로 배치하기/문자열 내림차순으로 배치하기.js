function solution(s) {
    var answer = '';
    let a= [...s]
    let b=a.sort();
    console.log(b)
   
    return b.reverse().join("")
}