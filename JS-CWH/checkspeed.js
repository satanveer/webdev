//speed check if <70 then 1 point for each 5km up and above 12 points licence suspended 
check_speed(78);

function check_speed(speed){
    if (speed<=75){
        console.log("Ok")
    }
    else if(speed>70){
        let points = Math.floor((speed-70)/5);
        if (points>=12){
            console.log('License suspended')
        }
        else console.log(points)
    }
}