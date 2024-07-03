function solution(k, tangerine) {
    let answer = 0;
    let total=0
    let obj={}
 
    for(let x of tangerine){
         if(obj[x]){
            obj[x]++
        }else{
            obj[x]=1
        }
    }
    
    let values=Object.values(obj)
    let sortedValues=values.sort((a,b)=>(b-a))
    for(let i=0; i<sortedValues.length; i++){
        total+=sortedValues[i]
        answer++
        if(total>=k){
            break;
        }
    }
    
    return answer
}