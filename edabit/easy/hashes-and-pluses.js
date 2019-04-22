function hashPlusCount(str) {
	return [str.replace(/[+]/g, "").length, str.replace(/[#]/g, "").length];
}