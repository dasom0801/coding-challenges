function set(arr) {
  return arr.filter((x, idx, arr) => arr.indexOf(x) === idx);
}