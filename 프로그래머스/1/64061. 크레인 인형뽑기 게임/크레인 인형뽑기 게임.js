function solution(board, moves) {
    let answer = 0;
    let container=[]
    for(let i=0; i<moves.length; i++){
        for(let row=0; row<board.length; row++){
            if(board[row][moves[i]-1]!==0){
                container.push(board[row][moves[i]-1])
                board[row][moves[i]-1]=0
                 if(container.at(-1)===container.at(-2)){
                    container.pop()
                    container.pop()
                    answer+=2
                    }
                    break
            }
        }
    } 
    return answer;
}