function solution(s, skip, index) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const filtered = [...alphabet].filter(ch => !skip.includes(ch));

  let answer = "";

  for (const ch of s) {
    const currentIndex = filtered.indexOf(ch);
    const nextIndex = (currentIndex + index) % filtered.length;
    answer += filtered[nextIndex];
  }

  return answer;
}