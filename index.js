function produceDrivingRange(blockRange) {
  return function(placeOne, placeTwo) {
    const distance = Math.abs(parseInt(placeOne) - parseInt(placeTwo))
    const range = blockRange - distance
    if (range >= 0) {
      return `within range by ${range}`
    } else {
      return `${Math.abs(range)} blocks out of range`
    }
  }
}

function produceTipCalculator(percent) {
  return function(amount) {
    return percent * amount
  }
}
