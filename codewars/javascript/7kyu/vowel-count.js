function getCount(str) {
  return str.replace(/[^aeiou]/g, '').length;
}