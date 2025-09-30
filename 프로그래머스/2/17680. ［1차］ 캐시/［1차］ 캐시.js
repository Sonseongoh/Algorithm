function solution(cacheSize, cities) {
    let answer = 0;
    let cache=[]
    cities=cities.map(city=>city.toUpperCase())
    
    for(let city of cities){
        
        //cache hit
        if(cache.includes(city)){
            answer+=1
            cache.splice(cache.indexOf(city),1)
            cache.push(city)
        }else{
            //cache miss
            answer+=5
            if(cacheSize>0){
                if(cache.length>=cacheSize){
                cache.shift()
                }
                cache.push(city)
            }
        }
    }
    
    return answer;
}