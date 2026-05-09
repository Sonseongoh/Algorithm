function solution(elements) {
  const n = elements.length;
  const arr = [...elements, ...elements];

  const prefix = [0];

  for (let i = 0; i < arr.length; i++) {
    prefix[i + 1] = prefix[i] + arr[i];
  }

  const sums = new Set();

  for (let len = 1; len <= n; len++) {
    for (let start = 0; start < n; start++) {
      const end = start + len;
      const sum = prefix[end] - prefix[start];
      sums.add(sum);
    }
  }

  return sums.size;
}