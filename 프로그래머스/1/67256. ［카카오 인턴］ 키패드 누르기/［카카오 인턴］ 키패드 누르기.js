function solution(numbers, hand) {
    let answer = '';
      const keyPad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2],
    };
    
    let lHand=keyPad['*']
    let rHand=keyPad['#']
    
  
    
    for(let x of numbers){
        if(x===1||x===4||x===7){
            answer+="L"
            lHand=keyPad[x]
        }else if(x===3||x===6||x===9){
            answer+='R'
            rHand=keyPad[x]
        }else{
            let target=keyPad[x]
            let lDist=Math.abs(lHand[0]-target[0])+Math.abs(lHand[1]-target[1])
            let rDist=Math.abs(rHand[0]-target[0])+Math.abs(rHand[1]-target[1])
            
            if(lDist<rDist){
                answer+='L'
                lHand=target
            }else if(lDist>rDist){
                answer+='R'
                rHand=target
            }else{
                //거리가 같을경우
                if(hand==='right'){
                    answer+='R'
                    rHand=target
                }else{
                    answer+='L'
                    lHand=target
                }
            }
        }
    }
    
    return answer;
}

//1. 1,4,7 이면 L   3,6,9이면 R
//2. 왼손 위치와 오른손 위치 변수 생성해서 기억해주기
//3. 거리 비교해서 2,5,8,0 입력하기
//4. 번호판 객체로 만들어주기

// [1,2,3]
// [4,5,6]
// [7,8,9]
// ['*',0,'#']