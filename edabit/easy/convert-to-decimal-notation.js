function convertToDecimal(perc) {
  return perc.map(num => parseFloat(num, 10) / 100 );
}