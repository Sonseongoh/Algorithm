function solution(babbling) {
    let word = ["aya", "ye", "woo", "ma"];
    let answer = 0;
    for (let x of babbling) {
        for (let y of word) {
         if (x.includes(y)) {
                 x = x.split(y).join(' ');
            }
            // console.log(x)
        }
      
        if (x.trim() === '') {
            answer++;
        }
        // console.log(x)
    }
    
    return answer
}

// 1.babbling 에 word 발음이 있는지 확인(for,includes)
// 2.있다면 해당 단어를 제거해서 모두 제거 되면 정답 +1

// x = x.split(y).join(' ');  이부분을 x = x.split(y).join(''); 으로 공백없이 작성했었더니   if (x=== '') 아래 if문을 이렇게 작성하니까 실패했었음
