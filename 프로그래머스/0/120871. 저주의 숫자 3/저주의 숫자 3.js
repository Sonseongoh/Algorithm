function solution(n) {
    let count = 0;  
    let number = 0; 

    while (count < n) {
        number++; 
        if (number % 3 === 0 || String(number).includes('3')) {
            continue;
        }
        
        count++; 
    }

    return number; 
}