//  make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.
// multiplyAll([1, 2, 3])(2) = [2, 4, 6];

const multiplyAll = arr => n => arr.map(x => n * x);

function multiplyAll( arr ){
    return function cracozabra( n ){
      return arr.map(el => el * n);
    }
  }