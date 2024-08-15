// 배열의 수들을 M번 더하여 가장 큰 수를 만드는 법칙
// 배열의 특정한 인덱스에 해당하는 수가 연속해서 K번을 초과하여 더해질 수 없다.
// 인덱스가 다르면 같은 수라도 다른 것으로 간주한다.
// 예) 배열 [2, 4, 5, 4, 6], M: 8, K: 3 => 6 + 6 + 6 + 5 + 6 + 6 + 6 + 5 = 46
// 예) 배열 [3, 4, 3, 4, 3], M: 7, K: 2 => 4 + 4 + 4 + 4 + 4 + 4 + 4 = 28
const solution = (arr, M, K) => {
	const numbers = [0, 0];
	let result = 0;
	// Array에서 가장 큰 두 개의 수만 뽑아내기
	for (let num of arr) {
		if (numbers[1] < num) {
			numbers[1] = num;
		}

		if (numbers[1] > numbers[0]) {
			[numbers[0], numbers[1]] = [numbers[1], numbers[0]];
		}
	}

	for (let i = 1; i <= M; i++) {
		if (i % (K + 1) === 0) {
			result += numbers[1];
			continue;
		}
		result += numbers[0];
	}
	return result;
};

const solution2 = (arr, M, K) => {
	const [first, second] = arr.sort((a, b) => b - a);

	// 가장 큰 수 * K회 + 두 번째로 큰 수 1회가 반복되는 형태로 더해진다.
	// M / (K + 1)를 하면 반복 횟수를 알 수 있다.
	// M으로 나누어 떨어지지 않는 경우 그 만큼 가장 큰 수를 더해준다.
	const repeatFirst = Math.floor(M / (K + 1)) * K + (M % (K + 1));
	// 두 번째로 큰 수는 M에서 가장 큰 수 반복 횟수를 뺀 만큼이다.
	const repeatSecond = M - repeatFirst;
	return first * repeatFirst + second * repeatSecond;
};

console.log(solution([2, 4, 5, 4, 6], 8, 3));
console.log(solution([3, 4, 3, 4, 3], 7, 2));
console.log(solution2([2, 4, 5, 4, 6], 8, 3));
console.log(solution2([3, 4, 3, 4, 3], 7, 2));
