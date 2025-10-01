function solution(s) {
    let sets = s.slice(2, -2).split("},{")
        .map(str => str.split(",").map(Number));
    
    sets.sort((a, b) => a.length - b.length);
    
    let answer = [];
    let seen = new Set();

    for (let set of sets) {
        for (let num of set) {
            if (!seen.has(num)) {
                seen.add(num);
                answer.push(num);
            }
        }
    }
    return answer;
}