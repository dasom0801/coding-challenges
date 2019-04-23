function maximumScore(tileHand) {
  return tileHand.reduce((sum, obj) => sum + obj.score, 0);
}