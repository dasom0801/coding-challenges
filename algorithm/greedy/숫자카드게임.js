// N * M 형태로 숫자 카드가 놓여 있을 때
// 각 행에서 가장 낮은 숫자를 뽑는다.
// 최종적으로 뽑은 카드 중에서 가장 큰 숫자를 뽑는다.

const solution = (array) => {
	const mins = [];
	for (let row of array) {
		mins.push(Math.min(...row));
	}
	return Math.max(...mins);
};

console.log(
	solution([
		[3, 1, 2],
		[4, 1, 4],
		[2, 2, 2],
	])
);

console.log(
	solution([
		[7, 3, 1, 8],
		[3, 3, 3, 4],
	])
);
