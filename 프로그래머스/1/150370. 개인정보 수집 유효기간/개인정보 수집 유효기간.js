function solution(today, terms, privacies) {
    let answer = [];
    let willAdd=[]
    //today 날짜를 년월일로 나눔
    let [tyear,tmonth,tday]=today.split('.').map((el)=>Number(el))
    
    //terms를 약관명과 개월수로 나눠서 splitedTerms에 저장
    let splTerms=[]
    for(let x of terms){
        splTerms.push(x.split(' '))
    }

    
    //privacies를 날짜와 약관으로 쪼개서 splPrivacies에 저장
    let splPrivacies=privacies.map((v)=>v.split(' ')) 
    console.log(splPrivacies)
    
    //willAdd에 더해줄 날짜수를 저장
    for(let j=0; j<splPrivacies.length; j++){
        for(let k=0; k<splTerms.length; k++){
             if(splPrivacies[j][1]===splTerms[k][0]){
                willAdd.push(Number(splTerms[k][1]))
             }
        }
        
    }
    console.log(willAdd)
    
    
    
    //날짜 계산 시작
   for(let i=0; i<splPrivacies.length; i++){
       let [pyear,pmonth,pday]=splPrivacies[i][0].split('.').map((el)=>Number(el))
       pmonth+=willAdd[i]
       pday-=1
       if(pday===0){
            pday=28
            pmonth--
       }
       
       if(pmonth>12){
           pyear+=Math.floor(pmonth/12)
           pmonth%=12
           if(pmonth===0){
               pyear-=1
               pmonth=12
           }
       }
       
       if(tyear>pyear){
           answer.push(i+1)
       }else if(tyear === pyear && tmonth > pmonth){
            answer.push(i+1)
       }else if(tyear === pyear && tmonth === pmonth && tday > pday){
           answer.push(i+1)
       }
       // console.log(pyear,pmonth,pday)
   }
    
    
    
    return answer;
}


// 1. terms의 각 element를 split으로 나눠서 splTerms로 선언
// 2. privacies를 split(' ')으로 나눠서 splPrivacies로 선언
// 3.splTerms[x][0]과 splPrivacies[y][1]을 비교해서 같다면 Nubmer(splTerms[x][1])을 willAdd에 저장 후 나중에 splPrivacies[y][0]에 더해준다


//4. 이제 날짜 계산시작
// 5. splPrivacies[0][i]를 .을 기준으로 나눠서 마지막 . 이 28이  오버되면 그앞 +1 , 그앞은 12가 되면 그앞 +1