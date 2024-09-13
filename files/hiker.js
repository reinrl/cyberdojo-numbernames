'use strict';
 
const onesMap = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
};
 
const doubleMap = {
    1: "ten",
    2: "twent",
    3: "thirt",
    4: "fort",
    5: "fift",
    6: "sixt",
    7: "sevent",
    8: "eightt",
    9: "ninet"
};
 
 
 
function computeThree(number) {
  
  let myNumber = number;
  
  let isTeen = false;
  let myHundreds = "";
  let myTens = "";
  let myOnes = "";
  let myAnd = "";
  
  if (Math.floor(myNumber / 100) > 0){
    myHundreds += onesMap[Math.floor(myNumber / 100)] + " hundred ";
  }
  
  myNumber = myNumber % 100;
  
  if (Math.floor(myNumber / 10) > 1){
    myTens += doubleMap[Math.floor(myNumber / 10)] + "y ";
  }else if (Math.floor(myNumber / 10) > 0){
    if (myNumber == 14){
      myTens += "fourteen ";
    }else if (myNumber > 12){
      myTens += doubleMap[myNumber % 10] + "een ";
    }else if (myNumber == 12){
      myTens += "twelve";
    }else if (myNumber == 11){
      myTens += "eleven ";
    }else if (myNumber == 10){
      myTens += "ten";
    }
    isTeen = true;
  }
  
  myNumber = myNumber % 10;
  
  if (!isTeen && myNumber > 0){
    myOnes += onesMap[myNumber];
  }
  
  if (myHundreds != "" && (myTens != "" || myOnes != "")) {
      myAnd = "and ";
  }
      
  
  let myReturn = "" + myHundreds + myAnd + myTens + myOnes;
  
  return myReturn.trimEnd();
  
}
 
function answer(number) {
  // build up our output string incrementally...
  let myReturn = "";
  // convert our number to a string and think about it in reverse (so that we only iterate as many times as we have to)
  let numberAsReversedArray = number.toString().split("").reverse();
  // this will drive any suffix to add to the output of this iteration
  let timesThrough = 1;
  // as long as we have numbers to iterate through, keep going
  while (numberAsReversedArray.length) { 
    // build up the output for this chunk
    let strToReturn = computeThree(parseInt(numberAsReversedArray.slice(0, 3).reverse().join("")));
    // only specify if this chunk has output
    if(strToReturn.length) {
      switch(timesThrough) {
        case 4:
          strToReturn += " billion, ";
          break;
        case 3:
          strToReturn += " million, ";
          break;
        case 2:
          strToReturn += " thousand, ";
          break;
        default:
          break;
      };
    }
    // because we are working backwards, prepend the existing output with the output from this run
    myReturn = strToReturn + myReturn;
    // reset number for the next run (minus what we have already processed)
    numberAsReversedArray = numberAsReversedArray.toSpliced(0, 3);
    // on to the next chunk...
    timesThrough++;
  }
  
  // handle cases where an entire trailing chunk is zeroes (e.g., 3000)
  if (myReturn.substring(myReturn.length - 2) === ", ") {
    return myReturn.substring(0, myReturn.length - 2);
  } else {
    return myReturn;
  }
}
 
module.exports = answer;