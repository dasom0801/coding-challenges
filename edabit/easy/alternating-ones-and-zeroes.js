function canAlternate(s) {
	return Math.abs(s.replace(/0/g, "").length - s.replace(/1/g, "").length) <= 1;
}