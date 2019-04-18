function indexShuffle(str) {
	const splitedStr = str.split("");
	return splitedStr.filter((s, i)=> i % 2 === 0 ).join("") 
		+ splitedStr.filter((s, i) => i % 2 !== 0).join("");
}