function longestZero(s) {
	const arr = s.split('1');
	let long = '';
	if (arr.length === 0) return long;
	for(let i = 0; i < arr.length; i++) {
		if (arr[i].length > long.length) long = arr[i];
	}
	return long;
}