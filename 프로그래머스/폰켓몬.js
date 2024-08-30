// https://school.programmers.co.kr/learn/courses/30/lessons/1845
function solution(nums) {
	const numSet = new Set(nums);
	return Math.min(nums.length / 2, numSet.size);
}

console.log(solution([3, 1, 2, 3])); // 2
console.log(solution([3, 3, 3, 2, 2, 4])); // 3
console.log(solution([3, 3, 3, 2, 2, 2])); // 2
