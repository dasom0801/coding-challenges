const res = [];

// 주함수는 고유한 숫자 배열을 입력하고 순열을 반환
function permute(nums) {
	// '경로' 기록
	const track = [];
	backtrack(nums, track);
	return res;
}

// 경로: track에 기록
// 선택 리스트: nums에 존재하지 않는 track의 요소
// 종료 조건: nums의 요소가 모두 track에 존재
function backtrack(nums, track) {
	if (track.length === nums.length) {
		res.push([...track]);
		return;
	}

	for (let i = 0; i < nums.length; i++) {
		if (track.includes(nums[i])) continue;
		track.push(nums[i]);
		backtrack(nums, track);
		track.pop();
	}
}

console.log(permute([1, 2, 3]));
