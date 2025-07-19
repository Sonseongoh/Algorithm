function solution(book_time) {
   
    const timeChange = (time) => {
        const [hour, minute] = time.split(':').map(Number);
        return hour * 60 + minute;
    };

    const times = book_time.map(([start, end]) => [timeChange(start), timeChange(end) + 10]);

    
    times.sort((a, b) => a[0] - b[0]);

    const rooms = [];

    for (let [start, end] of times) {
      
        let reused = false;

        for (let i = 0; i < rooms.length; i++) {
            if (rooms[i] <= start) {
                rooms[i] = end; 
                reused = true;
                break;
            }
        }

        if (!reused) {
            rooms.push(end); 
        }
    }

    return rooms.length;
}