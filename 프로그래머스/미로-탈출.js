// https://school.programmers.co.kr/learn/courses/30/lessons/159993

// 이동 가능한 좌표인지 판단하는 함수
function isValidMove(ny, nx, n, m, maps) {
  return ny >= 0 && ny < n && nx >= 0 && nx < m && maps[ny][nx] !== "X";
}

// 방문한 적이 없으면 큐에 넣고 방문 여부 표시
// 방문한 적이 있으면 time + 1을 하지 않기 때문에 중복된 탐색을 피하는 게 된다.
function appendToQueue(ny, nx, k, time, visited, q) {
    if (!visited[ny][nx][k]) {
        visited[ny][nx][k] = true;
        q.push([ny, nx, k, time + 1]);
    }
}

function solution(maps) {
    const n = maps.length, m = maps[0].length;
    const visited = Array.from({ length: n }, () =>
      Array.from({ length: m }, () =>
        Array(2).fill(false)
      )
    );
    // 위, 아래, 왼쪽, 오른쪽 이동 방향
    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];
    const q = [];
    let endY = -1, endX = -1;

    // 시작점과 도착점을 찾아 큐에 넣고 방문 여부 표시
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (maps[i][j] === "S") {
                q.push([i, j, 0, 0]) // 시작점
                visited[i][j][0] = true;
            }
            if (maps[i][j] === "E") { // 도착점
                endY = i;
                endX = j;
            }
        }
    }

    while (q.length) {
        const [y, x, k, time] = q.shift(); // 큐에서 좌표와 이동 횟수를 꺼냄

        // 도착점에 도달하면 결과 반환
        if (y === endY && x === endX && k === 1) {
            return time
        }

        // 네 방향으로 이동
        for (let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];

            // 이동 가능한 좌표만 큐에 넣음
            if (!isValidMove(ny, nx, n, m, maps)) {
                continue;
            }

            // 다음 이동 지점이 레버인 경우
            if (maps[ny][nx] === "L") {
                appendToQueue(ny, nx, 1, time, visited, q);
            } else {
                appendToQueue(ny, nx, k, time, visited, q);
            }
        }
    }
    // 도착점에 도달하지 못한 경우
    return -1;
}

console.log(solution(["SOOOL","XXXXO","OOOOO","OXXXX","OOOOE"])) // 16