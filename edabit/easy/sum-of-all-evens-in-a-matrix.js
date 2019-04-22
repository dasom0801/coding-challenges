function sumOfEvens(arr) {
	return arr.map(x=> x.reduce((sum, value) => 
		value % 2 === 0? sum + value : sum + 0, 0))
	.reduce((sum, value) => sum + value,0);
}