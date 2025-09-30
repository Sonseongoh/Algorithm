function solution(n, arr1, arr2) {
    let answer = [];
    let map= Array.from({length:n},()=>Array(n).fill(' '))
    for(let i=0; i<n; i++){
        let arr1Line=arr1[i].toString(2).padStart(n,'0')
        let arr2Line=arr2[i].toString(2).padStart(n,'0')
        
        for(let j=0; j<n; j++){
            let sum=Number(arr1Line[j])+Number(arr2Line[j])
            if(sum>0){
                map[i][j]='#'
            }
        }     
    }
    return map.map(n=>n.join(''))
}