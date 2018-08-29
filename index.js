function produceDrivingRange(range) {
  return function(startRange, endRange){
    let start = parseInt(startRange);
    let end = parseInt(endRange);
    let distance = Math.abs(start - end);
    let difference = range - distance;

    if (difference > 0){
      return `within range by ${difference}`
    }
    else{
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(fare) {
  return function(tip) {
    return fare * tip
  }
}
