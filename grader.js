module.exports = {
  letterGrader: function(num){
    if(num>=98 && num<=100){
      return 'A+';
    }
    else if(num>=94 && num<=97){
      return 'A';
    }
    else if(num>=90 && num<=93){
      return 'A-';
    }
    else if(num>=87 && num<=89){
      return 'B+';
    }
    else if(num>=84 && num<=86){
      return 'B';
    }
    else if(num>=80 && num<=83){
      return 'B-';
    }
    else if(num>=77 && num<=79){
      return 'C+';
    }
    else if(num>=74 && num<=76){
      return 'C';
    }
    else if(num>=70 && num<=73){
      return 'C-';
    }
    else if(num>=67 && num<=69){
      return 'D+';
    }
    else if(num>=64 && num<=66){
      return 'D';
    }
    else if(num>=60 && num<=63){
      return 'D-';
    }
    else if(num>=0 && num<=59){
      return 'F';
    }
  },
  avgerageScore: function(arr){
    result = 0;
    for(var i = 0; i<arr.length; i++){
      result += arr[i]/arr.length;
    }
    return result;
  },
  medianScore: function(arr){
    arr.sort(function(a, b){
      return a-b;
      }
    );
    var half = Math.floor(arr.length/2); //
    if(arr.length % 2){
      return arr[half];
    }
    else{
      return (arr[half-1] + arr[half])/2;
    }
  },
  modeScore: function mode(arr){
    var numMapping = {};
    var greatestFreq = 0;
    var mode;
    arr.forEach(function findMode(num){
      numMapping[num] = (numMapping[num] || 0) + 1;
      if(greatestFreq < numMapping[num]){
         greatestFreq = numMapping[num];
         mode = num;
      }
    });
    return +mode; 
  }
};
