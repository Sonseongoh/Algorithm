function solution(schedules, timelogs, startday) {
    function timeCheck(time){
        let hour=Math.floor(time/100)
        let min=time%100+10
        if(min>=60){
            hour+=1
            min-=60
        }
        return hour*100+min
    }
    let answer = 0;
    let days=['월','화','수','목','금','토','일']
    
    for(let i=0; i<schedules.length; i++){
        let flag=0
        let limit=timeCheck(schedules[i])
        for(let j=0; j<timelogs[0].length; j++){
            let start=days[(startday-1+j)%7]
            if(start==='토'||start==='일') continue;
            if(timelogs[i][j]<=limit){
                flag++
            }
        }
        if(flag===5) answer++
    }
    
    return answer;
}