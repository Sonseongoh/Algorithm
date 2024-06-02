function solution(my_string, overwrite_string, s) {
    let answer = '';
    for(let i=0; i<s; i++){
        answer+=my_string[i]
    }
    answer+=overwrite_string
    for(let j=s+overwrite_string.length; j<my_string.length; j++){
        answer+=my_string[j]
    }
    return answer;
}