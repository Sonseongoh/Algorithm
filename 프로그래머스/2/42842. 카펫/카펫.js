function solution(brown, yellow) {
    let answer = [];
    let totalsize = brown+yellow
    for(let height=3; height<=totalsize/height; height++){
        let width = Math.floor(totalsize/height)
        if((width-2)*(height-2)=== yellow) {
            return [width,height];
        }
    }
     return answer
}

//1. 가로x 높이y일때 yellow = (x-2)(y-2)
//2. 높이,넓이는 최소 3 
//3. 