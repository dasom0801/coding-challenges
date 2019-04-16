function sumOfCubes(nums) {
	if (nums.length === 0) return 0;
	return nums.reduce((acc, cur) => {
		return acc + Math.pow(cur, 3); 
	}, 0)
}