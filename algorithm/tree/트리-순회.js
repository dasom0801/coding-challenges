// 이진 트리를 표현한 nodes를 인자로 받아서 전위, 중위, 후위 순회 결과를 반환하기
const solution = (nodes) => {
	// 전위 순회, 중위 순회, 후위 순회 결과 계산
	return [
		preorder(nodes, 0).slice(0, -1),
		inorder(nodes, 0).slice(0, -1),
		postorder(nodes, 0).slice(0, -1),
	];
};

const preorder = (nodes, index) => {
	if (index < nodes.length) {
		// 루트 노드를 출력한 다음, 왼쪽 서브 트리와 오른쪽 서브 트리를 재귀 호출하여 출력 순서대로 이어붙임
		let ret = nodes[index] + ' ';
		ret += preorder(nodes, index * 2 + 1);
		ret += preorder(nodes, index * 2 + 2);
		return ret;
	} else {
		return '';
	}
};

const inorder = (nodes, index) => {
	if (index < nodes.length) {
		// 왼쪽 서브 트리를 먼저 재귀 호출하여 출력 순서대로 이어붙임
		let ret = inorder(nodes, index * 2 + 1);
		// 루트 노드를 출력한 다음, 오른쪽 서브 트리를 재귀 호출하여 출력 순서대로 이어붙임
		ret += nodes[index] + ' ';
		ret += inorder(nodes, index * 2 + 2);
		return ret;
	} else {
		return '';
	}
};

const postorder = (nodes, index) => {
	if (index < nodes.length) {
		// 왼쪽 서브 트리와 오른쪽 서브 트리를 재귀 호출하여 출력 순서대로 이어붙임
		let ret = postorder(nodes, index * 2 + 1);
		ret += postorder(nodes, index * 2 + 2);
		// 루트 노드 출력
		ret += nodes[index] + ' ';
		return ret;
	} else {
		return '';
	}
};

console.log(solution([1, 2, 3, 4, 5, 6, 7]));
// 결과 ['1 2 4 5 3 6 7', '4 2 5 1 6 3 7', '4 5 2 6 7 3 1']
