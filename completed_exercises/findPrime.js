function findPrime(num) {

    let arr = new Array(20).fill(true)
    for (let i = 2; i <= Math.sqrt(num); i++) {
        arr.forEach((item, idx) => {
            if (idx === 0 || idx === 1) {
                arr[0] = false;
                arr[1] = false
            } else {
                if (idx !== i && idx % i === 0) {
                    arr[idx] = false;
                }
            }

        })
    }
    return arr.map((item, idx) => item ? idx : null).filter(item => item)
}

findPrime(20);


function maxStockProfit(pricesArr) {

    let buyPrice = 0;
    let sellPrice = 0;
    let maxProfit = -1;

    for (let i = 0; i <= pricesArr.length; i++) {
        buyPrice = sellPrice <= buyPrice ? pricesArr[i] : buyPrice;
        sellPrice = pricesArr[i + 1];
        let diff = sellPrice - buyPrice;
        if (maxProfit < diff) {
            maxProfit = diff;
        }
    }
    return maxProfit;
}

maxStockProfit([32, 46, 26, 26, 38, 52, 48, 50]);


// JSON stringify

// for null, undefined, number, string, array, object, nested array/object
function stringify(input) {
    if (typeof (input) === 'undefined') {
        return undefined
    }

    if (input === null || typeof (input) === 'number' || typeof (input) === 'boolean') {
        return `${input}`
    }

    if (typeof (input) === 'string') {
        return `"${input}"`
    }

    var res = ''

    if (Array.isArray(input)) {
        res += '['
        var items = []
        for (var item of input) {
            var val = stringify(item)
            if (typeof (val) !== 'undefined') {
                items.push(val);
            } else {
                items.push('null');
            }
        }
        res += items.join(',')
        res += ']'
        return res
    }

    if (typeof (input) === 'object') {
        res += '{'
        var items = []
        for (var key in input) {
            var val = stringify(input[key]);
            if (typeof (val) !== 'undefined') {
                items.push(`"${key}":${val}`)
            }
        }
        res += items.join(',')
        res += '}'
        return res
    }
}


// for (var key in input) {
//   console.log(key)
//   console.log(stringify(input[key]), JSON.stringify(input[key]))
//   console.log(stringify(input[key]) === JSON.stringify(input[key]))
//   console.log('\n')
// }

let input = {
    val: [1, 2, 3, 4],
    key: 'binoy'
}
stringify(input)


//match parens

let isValid = (str) => {
    let stack = [];

    let map = {
      '{':'}',
      '[':']',
      '(':')'
    }

    for (let parens of str) {

      if(parens === '{' || parens === '[' || parens === '(') {
        stack.push(parens);
      } else {
        let last = stack.pop();

        if(parens !== map[last]) {
          return false;
        }
      }
    }

    if(stack.length !== 0) {
      return false
    }

    return true
}

// Sum zero

function sumZero(arr) {
    let first = 0;
    let last = arr.length -1;
    let pairs = [];
    for (let  i = 0; i < arr.length; i++) {
      let sum = arr[first] + arr[last];
  
      if(sum === 0) {
        pairs.push(arr[first], arr[last]);
        return pairs;
      }
  
      if(sum < 0) {
        first++;
      } else {
        last--;
      }
    }
  }
  
  sumZero([-4,-2,-1,0,1,2,3, 4, 6])


  function naiveSearch(long, short) {

    let match = short;
    let word = '';
    for (let j = 0; j < short.length; j++){
      word += long[j];
    }
  
    if(word === short) return true;
  
    for (let i = short.length; i < long.length; i++) {
      word = word.slice(1) + long[i];
      if(word === short) {
        return true;
      }
    }
  
    return false;
  }
  
  naiveSearch('lorie loled', 'ie l')

//Largest sum
  function sumFinder(arr) {

    let first = 0;
    let second = 0;
    let sum = 0;
  
    for ( let i = 0 ; i < arr.length ; i++) {
      first = first > arr[i] ? first: arr[i];
      second = arr[i+1];
  
      if(sum < first+second) {
        sum = first + second;
      }
    }
  
  return sum;
    
  }

  //generate all combinations of string


  //increment by 1;
  function increment(arr){
    let upd = [];
    let remainder = 0;
      for(let i= arr.length -1; i>=0; i--) {
        let cv = i== arr.length -1 ? 1 : 0;
        let char = arr[i]+remainder + cv;
        if(remainder) {
          remainder = 0;
        }
        remainder = Math.floor(char / 10);
        upd.unshift(char === 10 ? 0: char)
      }
      return upd;
    }
    
    increment([2,9,9])


    //currying


let sentence = ''

function say1 () {
  if ( !arguments[0] ) {
    let s = sentence
    sentence = '';
    return s
  } else {      
    sentence += arguments[0] + ' '
    // Note: This is not a recursion
    return say1
  }

}

 say1('My')('Name')('is')('Binoy')() 


 // Maxium consecutive string count

 function consecutive(str) {

    let map = {};
    let intialCount = 1;
  
    for(let i = 0; i<str.length; i++ ) {
      map[str[i]] = intialCount;
      while(map[str[i]]) {
        map[str[i]] = map[str[i]] + 1;
        i++;
      }
      intialCount = 1;
    }
    return map
  }
  
  consecutive('aaaaaaaaasddbbbberee');


  // permutations of a stringify

function permutations(str, output = '', index = 0, arr = []) {
    for( let i = index; i < str.length; i++) {
      output = output.concat(str.charAt(i));
      arr.push(output);
      permutations(str, output, i+1, arr);
      output = output.substr(0, output.length -1);
    }
    return arr
  }
  
  permutations('abc');


// Caeser Cipher

function caesarCipher(str,num) {
  num = num % 26;
  var lowerCaseString = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newString = '';
  
  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    }
    else newString += alphabet[newIndex];
  };
  
  return newString;
}
caesarCipher('Zoo Keeper', 2);


 https://js-algorithms.tutorialhorizon.com/2017/03/07/hex-to-rgba-conversion-using-javascript/

 https://js-algorithms.tutorialhorizon.com/2017/01/23/length-of-longest-substring-without-repeating-characters/

 https://js-algorithms.tutorialhorizon.com/2016/08/21/count-negative-numbers-in-a-row-and-column-wise-sorted-matrix/
 https://js-algorithms.tutorialhorizon.com/2016/08/29/find-length-of-the-largest-subarray-with-contiguous-elements/