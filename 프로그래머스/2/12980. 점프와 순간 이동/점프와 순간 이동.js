function solution(n)
{
    let ans = 0;

  
    for(let x of n.toString(2)){
        if (x==='1'){
        ans++    
        }
        
    }
    
    

    return ans
}