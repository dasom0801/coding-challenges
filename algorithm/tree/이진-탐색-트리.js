// 첫 번째 인수 lst를 이용하여 이진 탐색 트리를 생성
// 두 번째 인수 search_lst에 있는 각 노드를 이진 탐색 트리에서 찾을 수 있는지 확인하여 True 또는 False를 담는 result를 반환

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BST {
	constructor() {
		this.root = null;
	}

	insert(value) {
		if (!this.root) {
			this.root = new Node(value);
		} else {
			let current = this.root;
			while (true) {
				if (value < current.value) {
					if (current.left) {
						current = current.left;
					} else {
						current.left = new Node(value);
						break;
					}
				} else {
					if (current.right) {
						current = current.right;
					} else {
						current.right = new Node(value);
						break;
					}
				}
			}
		}
	}

	search(value) {
		let current = this.root;
		while (!!current && current.value !== value) {
			if (value < current.value) {
				current = current.left;
			} else {
				current = current.right;
			}
		}

		return current;
	}
}

const solution = (lst, searchList) => {
	const bst = new BST();
	const result = [];

	for (value of lst) {
		bst.insert(value);
	}

	for (searchValue of searchList) {
		result.push(!!bst.search(searchValue));
	}

	return result;
};

console.log(solution([5, 3, 8, 4, 2, 1, 7, 10], [1, 2, 5, 6])); // [true, true, true, false]
console.log(solution([1, 3, 5, 7, 9], [2, 4, 6, 8, 10])); // [False, False, False, False, False]
