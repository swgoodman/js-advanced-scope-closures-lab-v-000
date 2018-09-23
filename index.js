

  function produceDrivingRange(blockRange) {
    return function(blockOne, blockTwo) {
      let start = parseInt(blockOne);
      let end = parseInt(blockTwo);
      let distanceToTravel = Math.abs(end - start);
      let isItAllowed = blockRange - distanceToTravel;

      if (isItAllowed > 0) {
        return `within range by ${isItAllowed}`
      } else {
        return `${Math.abs(isItAllowed)} blocks out of range`
      };
    };
  };

  function produceTipCalculator (percentage) {
    return function(tip) {
      return percentage * tip;
    };
  };

  function createDriver() {
    counter = 0
    return function(name) {
      this.name = name
      this.id = ++counter
    }
  }
