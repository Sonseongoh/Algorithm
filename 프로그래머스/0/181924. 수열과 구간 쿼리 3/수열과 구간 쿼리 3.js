function solution(arr, queries) {
    let answer = [];
    
   for(let i=0; i<queries.length; i++){
       let first=queries[i][0]
       let second=queries[i][1]
        
       let temp=arr[first]
       arr[first]=arr[second]
       arr[second]=temp
   }
    return arr;
}

//queries[0]