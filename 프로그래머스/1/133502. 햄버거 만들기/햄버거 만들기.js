function solution(ingredient) {
    let answer = 0;
    let set=[]
    for(let i=0; i<ingredient.length; i++){
        set.push(ingredient[i])
        if(set.slice(-4).join('')==='1231'){
            set.splice(-4)
            answer++
        }
    }
    return answer;
}

//1. 1231 이게 한세트
//2. ingredient 에서 1을 발견, 다음이 2 인지 맞다면 다음이 3인지 맞다면 다시 1인지 확인
//3. 1231 한세트가 맞다면 삭제
//4. 한번 삭제 했다면 다시 전체 순회하면서 반복