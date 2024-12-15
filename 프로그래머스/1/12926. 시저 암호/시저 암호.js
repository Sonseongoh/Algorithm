function solution(s, n) {
  return s
    .split('')
    .map((char) => {
      if (char === ' ') return char; 

      const base = char >= 'a' ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
      return String.fromCharCode(((char.charCodeAt(0) - base + n) % 26) + base);
    })
    .join('');
}