function solution(new_id) {
    // 1단계
    new_id = new_id.toLowerCase();
    // 2단계
    new_id = new_id.replace(/[^\w-\._]+/g, '');
    //3단계
    new_id = new_id.replace(/[\.]{2,}/g, '.');
    // 4단계
    //처음이 . 일경우 
    new_id = new_id[0] === '.' ? new_id.slice(1) : new_id;
    //마지막이 .일경우
    new_id = new_id[new_id.length - 1] === '.' ? new_id.slice(0, new_id.length - 1) : new_id;
    // 5단계
    new_id = new_id.length === 0 ? 'a' : new_id;
    // 6단계
    new_id = new_id.length >= 16 ? new_id.slice(0, 15) : new_id;
    new_id = new_id[14] === '.' ? new_id.slice(0, 14) : new_id;
    // 7단계
    if (new_id.length <= 2) {
        while(new_id.length<3){
            // new_id = new_id + new_id[new_id.length - 1]
            new_id += new_id.at(-1)
        }    
    }
    return new_id;
}