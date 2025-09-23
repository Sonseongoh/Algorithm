function solution(str1, str2) {
    let answer = 0;
    
    function makeSet(str){
        let arr=[]
        str=str.toUpperCase()
        for(let i=0; i<str.length-1; i++){
            let pair = str.slice(i,i+2)
            if (pair[0].toUpperCase() >= 'A' && pair[0].toUpperCase() <= 'Z' &&
            pair[1].toUpperCase() >= 'A' && pair[1].toUpperCase() <= 'Z') {
            arr.push(pair);
            }
        }
        return arr
    }
    
    let set1=makeSet(str1)
    let set2=makeSet(str2)
    //예외처리
    if(set1.length===0 && set2.length===0) return 65536
    
     let shared = 0;
    set1.forEach(item => {
        const index = set2.indexOf(item);
        if (index !== -1) {
            shared++;
            set2.splice(index, 1);  // 중복을 제거하는 방식
        }
    })
    
    //합집합
    let union = set1.length + set2.length;
    
    let jackard=shared/union
    
    answer=Math.floor(jackard*65536)
    
    
    
    
    
    return answer;
}