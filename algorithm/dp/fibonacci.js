// 재귀 알고리즘
// 시간 복잡도 = 하위 문제 개수 * 하위 문제 하나를 해결하는 데 걸리는 시간
// 하위 문제 개수의 시간 복잡도 = O(2^n) (이진 트리 노드의 총 수는 지수로 나타낸다.)
// 하위 문제 하나를 해결하는 데 걸리는 시간 = O(1) (f(n - 1) + fin(n -2)의 덧셈 계산)
// 중복 계산이 많기 때문에 비효율적인 알고리즘
const fibWithRecursion = (num) => {
	if (num === 1 || num === 2) {
		return 1;
	}
	return fibWithRecursion(num - 1) + fibWithRecursion(num - 2);
};

// 메모를 사용하는 재귀
// 계산 시간이 오래 걸리는 이유 = 중복
// 계산마다 하위 문제의 답을 계산하고 기록한 뒤 반환한다.
// 이미 계산한 해답이 있으면 다시 계산할 필요가 없다.
// 시간 복잡도 = O(N)
const fibWithMemo = (num) => {
	if (num === 0) return 0;
	// 0으로 초기화
	let memo = new Array(num + 1).fill(0);
	// 메모를 갖는 재귀
	return memoHelper(memo, num);
};

function memoHelper(memo, n) {
	// base case
	if (n === 1 || n === 2) return 1;
	// 이미 계산한 부분
	if (memo[n] !== 0) return memo[n];
	memo[n] = memoHelper(memo, n - 1) + memoHelper(memo, n - 2);
	return memo[n];
}

// 상향식 계산을 사용 - 가장 아래 제일 간단한 계산부터 시작하여 위로 올라간다.
const fibWithDPArray = (N) => {
	if (N === 0) return 0;
	if (N === 1 || N === 2) return 1;
	let dp = new Array(N + 1).fill(0);
	// base case
	dp[1] = dp[2] = 1;
	for (let i = 3; i <= N; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}
	return dp[N];
};

// 공간 복잡도 O(1)로 최적화
// DP 테이블은 모든 상태를 저장할 필요가 없으며, 이전의 두 상태만 저장하면 된다.
const fib = (N) => {
	if (N === 0) return 0;
	if (N === 2 || N === 1) return 1;
	let prev = 1,
		current = 1;
	for (let i = 3; i <= N; i++) {
		let sum = prev + current;
		[prev, current] = [current, sum];
	}
	return current;
};

console.log(fibWithRecursion(7));
console.log(fibWithMemo(7));
console.log(fibWithDPArray(7));
console.log(fib(7));
