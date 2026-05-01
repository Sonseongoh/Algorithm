function solution(topping) {
    const cakeA = {}; // 형의 케이크: 토핑 개수 관리
    const cakeB = new Set(); // 동생의 케이크: 고유 토핑 관리

    let answer = 0;
    let typeOfToppings = 0; // 형의 케이크에 남아 있는 고유 토핑 수

    // 형의 케이크 초기화
    for (let i = 0; i < topping.length; i++) {
        if (cakeA[topping[i]]) {
            cakeA[topping[i]]++;
        } else {
            cakeA[topping[i]] = 1;
            typeOfToppings++;
        }
    }

    // 케이크 나누기
    for (let i = 0; i < topping.length; i++) {
        cakeB.add(topping[i]); // 동생의 케이크에 토핑 추가
        cakeA[topping[i]]--; // 형의 케이크에서 토핑 제거

        if (cakeA[topping[i]] === 0) {
            typeOfToppings--; // 형의 케이크에서 고유 토핑 제거
        }

        // 형과 동생의 토핑 종류가 같다면 공평하게 나눔
        if (cakeB.size === typeOfToppings) {
            answer++;
        }
    }

    return answer;
}

//1. 두개의 배열생성
//2. 순회하며 잘라서 앞과 뒤를 다른 배열에 추가
//3. 중복제거해서 길이가 같다면 result ++