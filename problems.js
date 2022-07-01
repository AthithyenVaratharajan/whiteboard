function logBetween(lowNum, highNum){
    let arr = [];
    for ( let i = lowNum; i <= highNum; i++){
        arr.push(i);
    }
    return arr;
}

console.log(logBetween(2, 8));

//time complexity - O(n)
//space complexity - O(n)

let printReverse = function(min, max){
    let arr = [];

    for ( let i = max - 1; i > 0; i--){
        arr.push(i);
    }
    return arr;
}

console.log(printReverse(2, 8));

//time complexity - O(n)
//space complexity - O(n)

let fizzBuzz = function(max){
    let arr = [];
    for ( let i = 1; i < max; i++){
        if((i % 3 === 0 || i % 5 === 0) && !(i % 3 ===0 && i % 5 ===0)){
            arr.push(i);
        }

    }
    return arr;
}
console.log(fizzBuzz(20));


let isPrime = function(number){
    if ( number < 2){
        return false;
    }
    for ( let i = 2 ; i < number; i++){
        if (number % i === 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(45));
let array = [12, 6, 43, 2];
let maxValue = function(array){
    let maxNumber = -Infinity;
    for ( let i = 0; i < array.length; i++){
        let number = array[i];
        if (number > maxNumber){
            maxNumber = number;
        }
    }
    return maxNumber;
}


console.log(maxValue(array));

let myIndexOf = function(array, target){
    for (let i = 0; i < array.length; i++){
        let num = array[i];
        if ( num === target){
            return i;
        }

    }
    return -1;
}

console.log(myIndexOf([12, 6, 43, 2], 42));

function factorArray(array, number){
    let factor = [];
    for (let i = 0; i < array.length; i++){
        let num = array[i];
        if (number % num === 0){
            factor.push(num);
        }

    }
    return factor;
}

console.log(factorArray([2,3,4,5,6],20)); // => [2,4,5]
console.log(factorArray([2,3,4,5,6],35)); // => [5]
console.log(factorArray([10,15,20,25],5)); // => []

let oddRange = function(end){
    let array = [];

    for ( let i = 0; i <= end; i++){
        if (i % 2 !== 0){
            array.push(i);
        }
    }
    return array;
}

console.log(oddRange(13));  // => [ 1, 3, 5, 7, 9, 11, 13 ]
console.log(oddRange(6));  // => [ 1, 3, 5 ]

function reverseHyphenString(string){
    let newString = [];
    let words = string.split('-');
    for ( let i = words.length - 1; i >=0; i--){
        let word = words[i];
        newString.push(reverse(word));
    }
    return newString.join('-');
}

let reverse = function(word){
    let string = "";
    for (let i = 0; i < word.length; i++){
        let char = word[i];
        string += char;
    }
    return string
}

console.log(reverseHyphenString("Go-to-the-store")); // => "store-the-to-Go"
console.log(reverseHyphenString("Jump,-jump-for-joy")); // => "joy-for-jump-Jump,"


function intersect(a, b) {
    return a.filter(Set.prototype.has, new Set(b));
  }

console.log(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e'])); // => [ 'b', 'd' ]
console.log(intersect(['a', 'b', 'c'], ['x', 'y', 'z'])); // => []

function mirrorArray(array){
    let mirror = array;

    for ( let i = array.length-1; i >=0; i--){
        let ele = array[i];
        mirror.push(ele);
    }
    return mirror;
}

console.log(mirrorArray([1,2,3]));
  // => [ 1, 2, 3, 3, 2, 1 ]
console.log(mirrorArray(['a', 'b', 'c', 'd']));
  // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]


let abbreviate = function(sentence){
    let newSentence = [];
    let words = sentence.split(" ");

    for ( let i = 0 ; i < words.length; i++){
        let word = words[i];

            newSentence.push(remove(word));

    }
    return newSentence.join(' ');
}

let remove = function(words){
    let vowels = 'aeiou';
    let newWord = '';

    for ( let i = 0; i < words.length; i++){
        let char = words[i];

            if (vowels.includes(char)){
                char = '';
            }
            newWord += char;



    }
    return newWord;
}

console.log(abbreviate('the bootcamp is fun')); // => 'the btcmp is fun'
console.log(abbreviate('programming is fantastic')); // => 'prgrmmng is fntstc'
console.log(abbreviate('hello world')); // => 'hll wrld'
console.log(abbreviate('how are you')); // => 'how are you'
