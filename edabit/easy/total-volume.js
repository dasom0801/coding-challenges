function totalVolume(...boxes) {
  return boxes.reduce((acc, cur) => acc + cur.reduce((acc, cur) => acc * cur ,1), 0);
}