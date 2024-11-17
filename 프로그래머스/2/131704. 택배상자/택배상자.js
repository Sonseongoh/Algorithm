function solution(order) {
    let answer = 0;
    let sub = []; 
    let now = 1; 

   
    for (let i = 0; i < order.length; i++) {
        while (now <= order[i]) {
            sub.push(now);
            now++;
        }
        
        if (sub[sub.length - 1] === order[i]) {
            sub.pop();
            answer++;
        } else {
            break;
        }
    }

    return answer;
}


//1. order[0] 번째가 아니면 보조벨트에 실어야함 
//2. 
//3. 