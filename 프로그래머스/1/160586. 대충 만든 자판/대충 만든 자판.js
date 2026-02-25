function solution(keymap, targets) {
  const minPress = {}; 

  for (let i = 0; i < keymap.length; i++) {
    const key = keymap[i];
    for (let j = 0; j < key.length; j++) {
      const ch = key[j];
      const press = j + 1; 
      if (minPress[ch] === undefined || press < minPress[ch]) {
        minPress[ch] = press;
      }
    }
  }

  const result = [];
  for (const t of targets) {
    let sum = 0;
    let ok = true;

    for (let k = 0; k < t.length; k++) {
      const ch = t[k];
      if (minPress[ch] === undefined) {
        ok = false;
        break;
      }
      sum += minPress[ch];
    }

    result.push(ok ? sum : -1);
  }

  return result;
}