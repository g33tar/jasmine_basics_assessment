module.exports = {
  letterGrader: function (num) {
    if (num >= 98 && num <= 100) {
      return 'A+'
    }else if (num >= 94 && num <= 97) {
      return 'A'
    }else if (num >= 90 && num <= 93) {
      return 'A-'
    }else if (num >= 87 && num <= 89) {
      return 'B+'
    }else if (num >= 84 && num <= 86) {
      return 'B'
    }else if (num >= 80 && num <= 83) {
      return 'B-'
    }else if (num >= 77 && num <= 79) {
      return 'C+'
    }else if (num >= 74 && num <= 76) {
      return 'C'
    }else if (num >= 70 && num <= 73) {
      return 'C-'
    }else if (num >= 67 && num <= 69) {
      return 'D+'
    }else if (num >= 64 && num <= 66) {
      return 'D'
    }else if (num >= 60 && num <= 63) {
      return 'D-'
    }else if (num >= 0 && num <= 59) {
      return 'F'
    }
  },
  avgerageScore: function (arr) {
    var result = 0
    for (var i = 0; i < arr.length; i++) {
      result += arr[i] / arr.length
    }
    return result
  },
  medianScore: function (arr) {
    arr.sort()
    var half = Math.floor(arr.length / 2) // evaluates to "rounding down" to nearest whole integer
    if (arr.length % 2) {
      return arr[half]
    }else {
      return (arr[half - 1] + arr[half]) / 2
    }
  },
  modeScore: function mode (arr) {
    var numMapping = {}     // creates a new object
    var greatestFreq = 0    // creates the counter/ticker
    var mode             // empty unassigned variable for later
    arr.forEach(function findMode (num) {  // running the function findMode  on each item in the array
      numMapping[num] = (numMapping[num] || 0) + 1  // putting our number into object tallying/tracking freq occurs & and also setting counter to 1
      if (greatestFreq < numMapping[num]) {   // compare next tracked num to current
        greatestFreq = numMapping[num] // if the next tracted num has more counts then it will be the new mode
        mode = num // setting the mode to the most tallied number
      }
    })
    return +mode // the plus helps attempt to convert it to a number if someone passes in a string
  }
}
