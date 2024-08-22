function solution(num_list) {
    let answer = 0;
    let count=0;
   
       for(let x of num_list){
           while(x>1){
                 if(x%2===1){
               x=(x-1)/2
               count++
           }else if(x%2===0){
               x=x/2
               count++
           }
           }
       }
    return count;
}