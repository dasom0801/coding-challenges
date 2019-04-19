function isPrefix(word, prefix) {
	return word.startsWith(prefix.slice(0,-1));
}

function isSuffix(word, suffix) {
	return word.endsWith(suffix.slice(1));
}