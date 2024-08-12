// https://school.programmers.co.kr/learn/courses/30/lessons/72411

function solution(orders, course) {
	const result = [];

	for (let c of course) {
		const count = new Map();

		//손님들의 주문에서 코스의 메뉴 갯수만큼 만들 수 있는 조합을 구한다.
		for (let order of orders) {
			const combs = combination(order, c);
			// 각 메뉴 조합이 주문된 횟수를 구한다.
			for (let comb of combs) {
				const value = count.get(comb) || 0;
				count.set(comb, value + 1);
			}
		}
		// 가장 많이 주문된 조합을 찾는다.
		let max = 2;
		let mostOrdered = [];
		for (let [key, value] of count) {
			if (value > max) {
				max = value;
				mostOrdered = [key];
			} else if (value === max) {
				mostOrdered.push(key);
			}
		}
		result.push(...mostOrdered);
	}
	// 코스요리의 메뉴 구성을 오름차순으로 정렬한다.
	return result.sort();
}

// 문자열로 주어진 길이만큼 만들수 있는 모든 조합을 구한다.
function combination(str, length) {
	const result = [];
	// 문자열의 순서와 상관없이 동일한 조합을 만들 수 있도록 정렬한다.
	str = [...str].sort().join('');
	const combine = (start, current) => {
		if (current.length === length) {
			result.push(current);
			return;
		}

		// 현재 문자열 뒤에 오는 모든 문자열을 순회하면서 더한다.
		for (let i = start; i < str.length; i++) {
			combine(i + 1, current + str[i]);
		}
	};
	combine(0, '');
	return result;
}

console.log(solution(['ABCD', 'AB', 'CD', 'XYZ'], [2, 3])); // ['AB', 'CD']
