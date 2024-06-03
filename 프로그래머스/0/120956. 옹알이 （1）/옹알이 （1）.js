function solution(babbling) {
    let word = ["aya", "ye", "woo", "ma"];
    let answer = 0;
    for (let x of babbling) {
        for (let y of word) {
            x = x.split(y).join(' ');
        }
      
        if (x.trim() === '') {
            answer++;
        }
    }
    
    return answer
}

// 1.babbling 에 word 발음이 있는지 확인(for,includes)
// 2.있다면 해당 단어를 제거해서 모두 제거 되면 정답 +1