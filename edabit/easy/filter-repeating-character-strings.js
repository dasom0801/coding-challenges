function identicalFilter(arr) {
	return arr.filter(str => str[0].repeat(str.length) === str);
}