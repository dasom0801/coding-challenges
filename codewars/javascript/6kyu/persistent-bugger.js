function persistence(num) {
  let count = 0;
  while(String(num).length>1) {
    num = Number(String(num).split("").reduce((acc, cur) => acc * cur, 1));
    count++;
  }
  return count;
}