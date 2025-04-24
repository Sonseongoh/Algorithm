function solution(want, number, discount) {
    const wantObj = {};
    for (let i = 0; i < want.length; i++) {
        wantObj[want[i]] = number[i];
    }

    let answer = 0;

    for (let i = 0; i <= discount.length - 10; i++) {
        const discountObj = {};
        for (let j = i; j < i + 10; j++) {
            const item = discount[j];
            discountObj[item] = (discountObj[item] || 0) + 1;
        }

        let isMatch = true;
        for (let item in wantObj) {
            if (discountObj[item] !== wantObj[item]) {
                isMatch = false;
                break;
            }
        }

        if (isMatch) answer++;
    }

    return answer;
}

// 