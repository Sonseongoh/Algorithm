function solution(participant, completion) {
    let answer = '';
    
    let sortedParticipant=participant.sort()
    let sortedCompletion=completion.sort()
    
    for(let i=0; i<participant.length; i++){
        if(sortedCompletion[i]!==sortedParticipant[i]){
            answer=sortedParticipant[i]
            break;
        }
    }
    
    
    return answer
}

