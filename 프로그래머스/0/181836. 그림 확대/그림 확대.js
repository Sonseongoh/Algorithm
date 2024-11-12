function solution(picture, k) {
    let answer = [];

    for (let row of picture) {
        let largedRow = [...row].map(char => char.repeat(k)).join('');
        for (let i = 0; i < k; i++) {
            answer.push(largedRow);
        }
    }

    return answer;
}