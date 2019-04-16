function reverseCase(str) {
	return str.split("")
			  .map(s => s.charCodeAt() <= 90 ? s.toLowerCase() : s.toUpperCase())
			  .join("");
}