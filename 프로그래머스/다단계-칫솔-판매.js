// https://school.programmers.co.kr/learn/courses/30/lessons/77486

const solution = (enroll, referral, seller, amount) => {
	const parent = {};
	const total = {};
	enroll.forEach((name, index) => {
		parent[name] = referral[index];
		total[name] = 0;
	});

	for (let i = 0; i < seller.length; i++) {
		let money = amount[i] * 100;
		let currentName = seller[i];

		while (money > 0 && currentName !== '-') {
			const percent10 = Math.floor(money * 0.1);
			total[currentName] += money - percent10;
			currentName = parent[currentName];
			money = percent10;
		}
	}
	return Object.values(total);
};

console.log(
	solution(
		['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'],
		['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'],
		['young', 'john', 'tod', 'emily', 'mary'],
		[12, 4, 2, 5, 10]
	)
); // [(360, 958, 108, 0, 450, 18, 180, 1080)]
console.log(
	solution(
		['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'],
		['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'],
		['sam', 'emily', 'jaimie', 'edward'],
		[2, 3, 5, 4]
	)
); // [0, 110, 378, 180, 270, 450, 0, 0]
