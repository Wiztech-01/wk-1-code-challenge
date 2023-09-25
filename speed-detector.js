function calculateDemeritPoints(speed){
    const speedlimit= 70;
    const  rateofdemeritpoints= 5;

    // if(speed<= speedlimit){
     //console.log("OK");
    //}
    
    if (speed <= speedLimit) {
        return "Ok";

      } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

    if (demeritPoints <= 12) {
          return `Points: ${demeritPoints}`;
          
        } else {
          return "License suspended";
        }
      }
    }
    
    function speedDetector() {
      const input = prompt("Enter the car speed in (km/h):");
      const speed = parseInt(input);
    
      if (!isNaN(speed)) {
        const result = detectDemeritPoints(speed);
        alert(result);
      } else {
        alert("Invalid input. Enter a valid speed as a number.");
      }
    }
    
    speedDetector();
    