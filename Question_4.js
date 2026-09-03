function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let fare = 50; // minimum fare
  
  if (distance > 2) {
    fare += (distance - 2) * 15;
  }
  
  fare += waitingMinutes * 2;
  
  if (isNight) {
    fare *= 1.2;
  }
  
  return fare;
}
console.log(getCngFare(5, true, 10)); //138
console.log(getCngFare(5, false, 10)); //115
console.log(getCngFare(1)); //50