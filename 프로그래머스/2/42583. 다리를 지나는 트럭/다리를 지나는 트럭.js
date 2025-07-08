function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let bridge=Array(bridge_length).fill(0)
    let totalWeight=0  //다리위 무게 총합
    
    while(truck_weights.length>0){
        totalWeight-=bridge.shift()
        
        //다리위에 올릴수 있는 경우
        if(totalWeight+truck_weights[0]<=weight){
            let truck=truck_weights.shift()
            bridge.push(truck)
            totalWeight+=truck
        }else{
            bridge.push(0)
        }
        
        //1초 추가
        answer+=1
    }
    
    //다리 위 차량들
    answer+=bridge.length
    
    
    return answer;
}