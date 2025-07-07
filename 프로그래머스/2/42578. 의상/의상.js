function solution(clothes) {
    let types=clothes.map(el=>el[1])
    let uniqueTypes=[...new Set(types)]
    
    let counts= uniqueTypes.map(el=>clothes.filter(item=>item[1]===el).length)
    
    
    let combinations= 1
    counts.forEach(count=>combinations*=(count+1))

    
    
    
    return combinations-1;
}