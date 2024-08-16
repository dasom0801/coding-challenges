// 완전탐색
// 정수 N이 입력되면 00시 00분 00초부터 N시 59분 59초까지 3이 하나라도 포함되는 경우의 수를 구한다.

const solution = (N) => {
	let count = 0;
	for (let hh = 0; hh <= N; hh++) {
		for (let mm = 0; mm < 60; mm++) {
			for (let ss = 0; ss < 60; ss++) {
				if (`${hh}:${mm}:${ss}`.includes(3)) {
					count++;
				}
			}
		}
	}
	return count;
};

console.log(solution(5)); // 11475
