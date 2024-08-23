// https://school.programmers.co.kr/learn/courses/30/lessons/92343

function solution(info, edges) {
  // 트리 구축 함수
  function buildTree(info, edges) {
    let tree = Array(info.length).fill(undefined).map(() => []);
    for (let edge of edges) {
      tree[edge[0]].push(edge[1]);
    }
    return tree;
  }

  let tree = buildTree(info, edges); // 트리 생성
  let maxSheep = 0; // 최대 양의 수를 저장할 변수 초기화

  // BFS를 위한 큐 생성 및 초기 상태 설정
  // (현재 위치, 양의 수, 늑대의 수, 방문한 노드 집합)
  let q = [{
    current: 0, sheepCount: 1, wolfCount: 0, visited: new Set()
  }];

  // BFS 시작
  while (q.length > 0) {
    // 큐에서 상태 가져오기
    let {current, sheepCount, wolfCount, visited} = q.shift();

    // 최대 양의 수 업데이트
    maxSheep = Math.max(maxSheep, sheepCount);

    // 방문한 노드 집합에 현재 노드의 이웃 노드 추가
    visited = new Set(visited);
    for (let node of tree[current]) {
      visited.add(node);
    }
    // 인접한 노드들에 대해 탐색
    for (let nextNode of visited) {
      if (info[nextNode] === 1) { // 늑대일 경우
        if (sheepCount > wolfCount + 1) {
          q.push({
            current: nextNode,
            sheepCount: sheepCount,
            wolfCount: wolfCount + 1,
            visited: new Set([...visited].filter(v => v !== nextNode))
          });
        }
      } else { // 양일 경우
        q.push({
          current: nextNode,
          sheepCount: sheepCount + 1,
          wolfCount: wolfCount,
          visited: new Set([...visited].filter(v => v !== nextNode))
        });
      }
    }
  }
  return maxSheep;
}

console.log(solution([0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1], [[0, 1], [1, 2], [1, 4], [0, 8], [8, 7], [9, 10], [9, 11], [4, 3], [6, 5], [4, 6], [8, 9]])) // 5

console.log(solution([0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0], [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6], [3, 7], [4, 8], [6, 9], [9, 10]])) // 5