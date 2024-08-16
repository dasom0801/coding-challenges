// 8 X 8 체스판에서 나이트의 위치가 주어졌을 때 이동할 수 있는 경우의 수를 구하는 문제
// 나이트의 이동 1. 수평으로 두 칸 이동 후 수직으로 한 칸 이동, 2. 수직으로 두 칸 이동 뒤, 수평으로 한 칸 이동
// 행 위치는 1부터 8까지로 표현, 열 위치는 a부터 h로 표현

const solution = (startPosition) => {
	const cols = 'abcdefgh';
	const moves = [
		{ x: -2, y: 1 },
		{ x: -2, y: -1 },
		{ x: 2, y: 1 },
		{ x: 2, y: -1 },
		{ x: 1, y: 2 },
		{ x: 1, y: -2 },
		{ x: -1, y: 2 },
		{ x: -1, y: -2 },
	];
	const current = {
		col: cols.indexOf(startPosition[0]) + 1,
		row: Number(startPosition[1]),
	};
	let count = 0;
	for (let { x, y } of moves) {
		const col = current.col + x;
		const row = current.row + y;
		if (!(col > 0 && col <= 8) || !(row > 0 && row <= 8)) continue;
		count++;
	}
	return count;
};

console.log(solution('a1')); // 2
console.log(solution('c2')); // 6
