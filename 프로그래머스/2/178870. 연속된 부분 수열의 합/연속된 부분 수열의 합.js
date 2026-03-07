function solution(sequence, k) {
  let left = 0;
  let sum = 0;

  let bS = 0;
  let bE = sequence.length - 1;
  let bL = Infinity;

  for (let right = 0; right < sequence.length; right++) {
    sum += sequence[right];

    while (sum >= k) {
      if (sum === k) {
        const currentLength = right - left;

        if (currentLength < bL) {
          bL = currentLength;
          bS = left;
          bE = right;
        }
      }

      sum -= sequence[left];
      left++;
    }
  }

  return [bS, bE];
}