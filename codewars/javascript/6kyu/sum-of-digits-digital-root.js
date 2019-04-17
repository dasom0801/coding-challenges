function digital_root(n) {
  return n < 10 ? n : digital_root(String(n).split("").reduce((acc, cur) => parseInt(acc, 10) + parseInt(cur, 10)));
}