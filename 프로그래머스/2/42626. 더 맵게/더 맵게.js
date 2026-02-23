function pushHeap(h, x) {
  h.push(x);
  let i = h.length - 1;
  while (i > 0) {
    const p = (i - 1) >> 1;
    if (h[p] <= h[i]) break;
    [h[p], h[i]] = [h[i], h[p]];
    i = p;
  }
}

function popHeap(h) {
  if (h.length === 0) return undefined;
  if (h.length === 1) return h.pop();

  const top = h[0];
  h[0] = h.pop();
  let i = 0;

  while (true) {
    const l = i * 2 + 1;
    const r = l + 1;
    let s = i;

    if (l < h.length && h[l] < h[s]) s = l;
    if (r < h.length && h[r] < h[s]) s = r;
    if (s === i) break;

    [h[i], h[s]] = [h[s], h[i]];
    i = s;
  }
  return top;
}

function solution(scoville, K) {
  const h = [];
  for (const x of scoville) pushHeap(h, x);

  let cnt = 0;
  while (h.length >= 2 && h[0] < K) {
    const a = popHeap(h);
    const b = popHeap(h);
    pushHeap(h, a + b * 2);
    cnt++;
  }
  return h[0] >= K ? cnt : -1;
}