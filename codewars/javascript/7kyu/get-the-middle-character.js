function getMiddle(s){
  const middle = Math.ceil((s.length / 2) - 1);
  return s.length % 2 === 0 ? s.slice(middle, middle + 2) : s.slice( middle, middle + 1)
}