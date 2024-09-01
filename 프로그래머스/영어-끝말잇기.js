// https://school.programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
	const usedWords = new Set();
	let prevLastLetter = words[0][0]; // 첫번째 단어 통과를 위해서
	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		if (usedWords.has(word) || word[0] !== prevLastLetter) {
			return [(i % n) + 1, Math.floor(i / n) + 1];
		}
		usedWords.add(word);
		prevLastLetter = word.slice(-1);
	}

	return [0, 0];
}

console.log(
	solution(3, [
		'tank',
		'kick',
		'know',
		'wheel',
		'land',
		'dream',
		'mother',
		'robot',
		'tank',
	])
); // [3,3]
console.log(
	solution(5, [
		'hello',
		'observe',
		'effect',
		'take',
		'either',
		'recognize',
		'encourage',
		'ensure',
		'establish',
		'hang',
		'gather',
		'refer',
		'reference',
		'estimate',
		'executive',
	])
); // [0, 0]
console.log(
	solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw'])
); // [1, 3]
