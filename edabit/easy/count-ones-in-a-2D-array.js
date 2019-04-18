function countOnes(matrix) {
  return matrix.join('').replace(/[^1]/g, "").length;
}