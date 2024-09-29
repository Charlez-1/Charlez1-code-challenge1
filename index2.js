function distance(speed){
let limit = 70;
let points = 5;

    if(speed <= limit){
        console.log("Ok");
    }
    else{
        const demeritpoints = Math.floor((speed - limit)/point);
        console.log(`points: ${demeritpoints}`);

        if(demeritpoints > 12){
            console.log("License suspended");
        }
    }
}

distance(65)