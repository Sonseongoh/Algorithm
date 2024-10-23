function solution(numbers) {
    let answer = [];
    for(let i=0; i<numbers.length; i++){
        for (let j=i+1; j<numbers.length; j++){
            if(!(answer.includes(numbers[i]+numbers[j]))){
            answer.push(numbers[i]+numbers[j])
            }
        }
    }
    
    return answer.sort((a,b)=>a-b);
}


//1. 배열에서 하나씩 뽑은다음 본인제외 다른 index 값이랑 더한다
//2. 그 값을 result 배열에 담는다
//3. result 배열에 이미 있다면 pass includes 사용
//4. result 오름차순 정렬 sort사용



