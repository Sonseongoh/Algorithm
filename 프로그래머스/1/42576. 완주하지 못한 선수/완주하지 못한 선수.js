function solution(participant, completion) {
    let answer = '';
    
    let sortedParticipant=participant.sort()
    let sortedCompletion=completion.sort()
    
    for(let i=0; i<completion.length; i++){
        if(sortedCompletion[i]!==sortedParticipant[i]){
            return sortedParticipant[i]
        }
    }
    
    
    return sortedParticipant[sortedParticipant.length-1];
}

