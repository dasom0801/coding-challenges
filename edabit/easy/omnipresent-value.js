function isOmnipresent(arr, val) {
  return arr.filter(arr => arr.indexOf(val) > -1).length === arr.length;
}