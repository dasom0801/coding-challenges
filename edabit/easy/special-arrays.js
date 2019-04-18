function isSpecialArray(arr) {
  return arr.length === arr.filter((num, idx) => {
	if(num % 2 === 0 && idx % 2 === 0) return true;
	if(num % 2 !== 0 && idx % 2 !== 0) return true;
  }).length;
}