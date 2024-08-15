// 500원, 100원, 50원, 10원으로 N원을 거슬러줄 때 필요한 최소 동전의 개수 구하기
// 동전의 종류를 K라고 할 때 시간복잡도는 O(K)
const solution = (N) => {
	const coinTypes = [500, 100, 50, 10];
	let count = 0;
	for (let coin of coinTypes) {
		count += Math.floor(N / coin);
		N = N % coin;
	}
	return count;
};

console.log(solution(1260));
