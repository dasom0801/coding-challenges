function narcissistic(value) {
    return value.toString().split('')
    .map((num, i, arr) => Math.pow(parseInt(num, 10), arr.length))
    .reduce((sum,cur) => sum + cur) === value;
  }
  