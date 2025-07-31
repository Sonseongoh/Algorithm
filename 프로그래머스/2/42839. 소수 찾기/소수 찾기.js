function solution(numbers) {
    let nums=[]
    let answer = 0;
    
    function isTarget(num){
        if(num<=1) return false
        if(num===2) return true
        if(num%2===0) return false
        
        for(let i=3; i*i<=num; i+=2){
            if (num % i === 0) return false;
        }
        return true;
    }
    
    function getAllNum(arr,cur){
        if(cur.length>0){
            nums.push(Number(cur))
        }
        for(let i=0; i<arr.length; i++){
            getAllNum(arr.slice(0,i).concat(arr.slice(i+1)),
                cur + arr[i])
        }
    }
     getAllNum(numbers.split(''), '');

    let uniqueArr = [...new Set(nums)];

    
    uniqueArr.forEach(num => {
        if(isTarget(num)) answer++;
    });
    
    return answer;
}