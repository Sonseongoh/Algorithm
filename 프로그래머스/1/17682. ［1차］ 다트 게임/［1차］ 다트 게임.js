function solution(dartResult) {
    let scores=[]
    let score=0
    
       for (let i = 0; i < dartResult.length; i++) {
        let char = dartResult[i];
           if(!isNaN(char)){
               if(char==='1' && dartResult[i+1]==='0'){
                   score=10
                   i++
               }else{
                                  score=Number(char)

               }
           }else if (char === 'S') {
                scores.push(score);
        } else if (char === 'D') {
            scores.push(score*score);
        } else if (char === 'T') {
            scores.push(score*score*score);
        }     else if (char === '*') {
            scores[scores.length - 1] *= 2;  // 현재 점수 2배
            if (scores.length > 1) {
                scores[scores.length - 2] *= 2;  // 이전 점수도 2배
            }
        } else if (char === '#') {
            scores[scores.length - 1] *= -1;  // 현재 점수 -1배
        }
            
       }
    let totalScore = 0;
    for (let i = 0; i < scores.length; i++) {
        totalScore += scores[i];
    }

    return totalScore;
    
}



//1 S 1제곱 D 2제곱 T 3제곱 * 해당점수,이전점수 2배 # 해당점수 마이너스
//2 *는 첫번째 나올시 해당 점수만 2배 ,*의 효과는 중첩 가능 4배가됨 (예제4)
//3 *는 #과 중첩 가능 -2배가됨
//4 S,D,T는 점수마다 하나씩 존재
//5 *,#은 점수마다 둘중 하나만 존재, 둘다 존재하지 않을 수도 있음

//1. 숫자 보너스 옵션으로 구성된 하나의 점수
