function produceDrivingRange(blockRange){
  return function(start, finish){
    let distance = parseInt(finish) - parseInt(start)
    if (distance > blockRange){
      return `${Math.abs(distance - blockRange)} blocks out of range`
    } else return `within range by ${Math.abs(distance - blockRange)}`
  }
}

function produceTipCalculator(tip){
  return function(amount){
    return amount * tip
  };
};

function createDriver(){
  let driverId = 0

  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId;
    };
  };
};
