function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation >= 42) {
      return pickupLocation - 42;
    } else {
      return 42 - pickupLocation;
    }
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
  }
  
  function distanceTravelledInFeet(startBlock, endBlock) {
    const distance = Math.abs(startBlock - endBlock);
    return distance * 264;
  }
  
  function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock);
    
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
