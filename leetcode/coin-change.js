// https://leetcode.com/problems/coin-change/description/
// 재귀 방식
const changeCoin = (coins, amount) => {
	const dp = (n) => {
		// base case
		if (n === 0) return 0;
		if (n < 0) return -1;

		// 최솟값을 무한대로 초기화
		let res = Infinity;
		for (let coin of coins) {
			subproblem = dp(n - coin);
			// 하위 문제의 답이 없으면 건너뛰기
			if (subproblem === -1) {
				continue;
			}
			res = Math.min(res, 1 + subproblem);
		}
		return res !== Infinity ? res : -1;
	};
	return dp(amount);
};

// 메모를 갖는 재귀
// 하위 문제의 총 수는 금액 n을 초과하지 않는다. 하위 문제 수는 O(n),
// for 루프를 포함하기 때문에 하위 문제를 처리하는 시간은 O(k)
// 총 시간 복잡도는 O(kn)
const changeCoinWithMemo = (coins, amount) => {
	// 메모
	const memo = {};
	const dp = (n) => {
		// 메모를 확인하여 중복 계산 제거
		if (memo[n]) return memo[n];
		// base case
		if (n === 0) return 0;
		if (n < 0) return -1;
		let res = Infinity;
		for (let coin of coins) {
			subproblem = dp(n - coin);
			if (subproblem === -1) {
				continue;
			}
			res = Math.min(res, 1 + subproblem);
		}
		memo[n] = res !== Infinity ? res : -1;
		return memo[n];
	};
	return dp(amount);
};

// DP 배열의 반복 해법
const changeCoinWithDPArray = (coins, amount) => {
	// dp 배열의 정의: 목표 금액이 i일 때, 최소 dp[i]개 동전이 필요하다.
	const dp = new Array(amount + 1).fill(amount + 1);
	// base case
	dp[0] = 0;

	// 외부 for 루프는 모든 상태의 모든 값을 순환
	for (let i = 0; i < dp.length; i++) {
		// 내부 for 루프는 모든 선택의 최솟값을 구함
		for (let coin of coins) {
			// 하위 문제에 답이 없으면 뛰어넘기
			if (i - coin < 0) continue;
			dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
		}
	}
	return dp[amount] === amount + 1 ? -1 : dp[amount];
};

console.log(changeCoin([1, 2, 5], 11));
console.log(changeCoinWithMemo([1, 2, 5], 11));
console.log(changeCoinWithDPArray([1, 2, 5], 11));
