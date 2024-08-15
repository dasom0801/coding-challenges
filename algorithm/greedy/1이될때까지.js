// N이 1이 될 때까지 다음 두 가지 중 하나만 반복적으로 수행한다.
// 1. N에서 1을 뺀다.
// 2. N을 K로 나눈다 (N이 K로 나누어떨질 때만)
// N이 1이 될 때가지 수행하는 최소 횟수 구하기

const solution = (N, K) => {
	let count = 0;
	while (N !== 1) {
		if (N % K === 0) {
			N /= K;
		} else {
			N--;
		}
		count++;
	}
	return count;
};

console.log(solution(25, 5)); // 2
console.log(solution(25, 3)); // 6
console.log(solution(17, 4)); // 3
