//Clock shows h hours, m minutes and s seconds after midnight.

//Your task is to write a function which returns the time since midnight in milliseconds.

//P Take in a number
//R return number in milliseconds
//E 1 sec 1000 milliseconds
//P multiply s by 1000

function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
  }