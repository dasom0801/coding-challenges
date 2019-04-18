function firstVowel(str) {
	for(let i = 0; i < str.length; i++) {
		if(/[aeiou]/i.test(str[i])) return i;
	}
}