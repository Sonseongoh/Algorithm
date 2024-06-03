function solution(babbling) {
    const sounds = ["aya", "ye", "woo", "ma"];
    
    let count = 0;

    for (let word of babbling) {

        for (let sound of sounds) {
            if (word.includes(sound)) {
                word = word.split(sound).join(' ');
            }
        }

        // 남은 부분이 모두 공백인 경우만 유효
        if (word.trim() === '') {
            count++;
        }
    }
    
    return count;
}