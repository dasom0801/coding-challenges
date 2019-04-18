function spelling(str) {
  return str.split("").map((x,i) => str.slice(0,i+1))
}