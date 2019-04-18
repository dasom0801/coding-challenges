function amplify(num) {
  return Array(num).fill().map((n, i) => (i + 1) % 4 === 0 ? (i + 1) * 10 : i + 1);
}
