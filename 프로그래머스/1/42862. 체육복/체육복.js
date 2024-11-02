function solution(n, lost, reserve) {
    // 1. 여벌 체육복이 있는데 도난당한 경우 제거
    let filteredLost = lost.filter(l => !reserve.includes(l)).sort((a,b)=>a-b);
    let filteredReserve = reserve.filter(r => !lost.includes(r)).sort((a,b)=>a-b);

    // 2. 여벌 체육복을 빌려주기
    for (let r of filteredReserve) {
        // 먼저 앞번호 학생에게 빌려줄 수 있는지 확인
        if (filteredLost.includes(r - 1)) {
            filteredLost = filteredLost.filter(l => l !== (r - 1));
        }
        // 앞번호가 아니면 뒷번호 학생에게 빌려줄 수 있는지 확인
        else if (filteredLost.includes(r + 1)) {
            filteredLost = filteredLost.filter(l => l !== (r + 1));
        }
    }

    // 3. 체육 수업에 참여할 수 있는 학생 수 계산
    return n - filteredLost.length;
}

//1. 여벌의 체육복이 있는데 도난당한 경우 제외
//2. lost의 안에 있는 숫자가 reserver의 숫자들과 비교해서 앞뒤로하나 있다면 제거
//3. n에서 lost의 길이 만큼 뺴주면 정답!