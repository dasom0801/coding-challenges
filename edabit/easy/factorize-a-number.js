function factorize(num) {
	return Array(num).fill(1).map((n, i) => i+1).filter(n => num % n === 0);
}