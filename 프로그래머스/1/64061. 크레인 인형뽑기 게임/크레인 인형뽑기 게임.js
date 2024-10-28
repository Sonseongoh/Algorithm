function solution(board, moves) {
    let answer = 0
    let basket=[]
    for (let i = 0; i < moves.length; i++) {
        let col=moves[i]-1
        for(let row =0; row<board.length; row++){
            if(board[row][col]!==0){
                basket.push(board[row][col])
                board[row][col]=0
                
                if(basket.at(-1)===basket.at(-2)){
                    basket.pop()
                    basket.pop()
                    answer+=2
                }
                break;
            }
        }
    }
    return answer;
}

// 1. moves[i], moves.length-1 사용 
// 2. basket =[] 에 담기
// 3. board는 board.length 만큼의 정사각형
// 4. board[i][0] 에서 i 가 증가하면서 0이 아닌걸 찾고 그걸 basket에 담은 다음 0으로 변경
// 5. basket에서는 연속되는 숫자가 들어가면 삭제해줘야함, 그리고 삭제 했다면 answer+=2