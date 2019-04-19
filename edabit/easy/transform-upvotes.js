function transformUpvotes(str) {
	return str.split(" ").map(num => num.includes('k') ? parseFloat(num, 10) * 1000 : num * 1);
}