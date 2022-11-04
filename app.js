console.log("JS ALGO");

const myfunc = (f, g) => {
  let a = f;
  let b = g;
  if (a() > b()) {
    return "f";
  } else if (b() > a()) {
    return "g";
  } else {
    return "neither";
  }
};

// console.log(
// 	myfunc(
// 		() => 50,
// 		() => 5
// 	)
// );

// reversing a string best method

function reverse(num) {
  let reversed = "";
  let str = num.toString();
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  let newNum = parseInt(reversed);
  if (num > newNum) {
    return true;
  } else {
    return false;
  }
}

// console.log(reverse(27));

function getLowestHighest(arr) {
  let result = [];
  let highest = arr[0];
  let lowest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (highest < arr[i]) {
      highest = arr[i];
    }
    if (arr[i] < lowest) {
      lowest = arr[i];
    }
  }
  result.push(lowest);
  result.push(highest);

  return result;
}
let arr = [-54, -21, -50, -40];
// console.log(getLowestHighest(arr));
let arr1 = [
  { a: "lemon", price: 100 },
  { b: "sugar", price: 20 },
];

arr1.sort((a, b) => {
  return a.price - b.price;
});
// console.log(arr1);
class persons {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  compareAge(p2) {
    // if(p1 || this.p2) return undefined;
    if (this.age > p2.age) {
      return `${this.name} is older than ${p2.name}`;
    } else {
      return `${p2.name} is older than ${this.name}`;
    }
  }
}
const p1 = new persons("ujjwal", 20);
const p2 = new persons("shlok", 21);
// console.log(p1.compareAge(p2));

// Switching Between Pencils
/*When coloring a striped pattern, you may start by coloring each square sequentially, meaning you spend time needing to switch coloring pencils.

Create a function where given an array of colors cols, return how long it takes to color the whole pattern. Note the following times:

It takes 1 second to switch between pencils.
It takes 2 seconds to color a square.
 */

function colorPatterns(colorArr) {
  let len = colorArr.length;
  let timeToPaint = 2 * len;
  console.log(timeToPaint);
  let timeTOChangeTheSide = len - 1;
  let total = timeTOChangeTheSide + timeToPaint;
  return total;
}

// console.log(colorPatterns(["red", "red", "red", "red", "blue"]));

// Disarium Number
//A number is said to be Disarium if the sum of its digits raised to their respective positions is the number itself.

function Disarium(num) {
  let numInWord = num.toString();
  // let numPow=1;
  let total = 0;
  for (let i = 0; i < numInWord.length; i++) {
    total += Math.pow(parseInt(numInWord[i]), i + 1);
  }
  if (total === num) return true;
  else return false;
  // return total;
}
// console.log(Disarium(135));

// The Karaca's Encryption Algorithm

/*Step 1: Reverse the input: "elppa"

Step 2: Replace all vowels using the following chart:

a => 0
e => 1
i => 2
o => 2
u => 3

// "1lpp0"
 */

// to solve upper problem  i should have the knowledge of regexp

// regexp ->  regularexpression
// these double forward slash are consider as comments
/hello/; // but if we writ in between those slashes than they becomes a regualar expresion
let reg = /ujjwal/gi; //this g is the flag that uses to make check all the list if the given expression present in the string or not
// and the i is case insensivity means it ignoring the uppercase or lowercase just checking the value
// console.log(typeof reg);
let str = "hello ujjwal Ujjwal";
let res = reg.exec(str); // gives the first match in the string
// console.log(res);
res = reg.exec(str); //  gives the second match in the string
// console.log(res);
res = reg.exec(str); // if again we check we get null because no match is present now

// console.log(res);
// console.log(reg.test(str)); // returns the boolean value if the match is present in the string or not

function replaceVowels(str) {
  let reg = /[aeiou]/gi;
  return str.replace(reg, 01223);
}

function checkPrime(num) {
  let divisor = 2;
  if (num === 1) return false;
  if (num === 2) return true;
  if (num < 1) return false;
  while (divisor < num) {
    if (num % divisor === 0) {
      return false;
    } else {
      divisor++;
    }
  }
  return true;
}

// console.log(checkPrime(1));

function factorsOfNumber(num) {
  let factors = [];
  let divisor = 2;
  while (num > 2) {
    if (num % divisor === 0) {
      factors.push(divisor);
      num = num / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
}

// console.log(factorsOfNumber(10));

function getNthfibonaci(n) {
  let a = 0;
  let b = 1;
  let temp;
  if (n <= 2) return 1;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
    console.log(temp);
  }
  return temp;
}
// console.log(getNthfibonaci(12));

function greatestCommonDivisor(num1, num2) {
  let Greatestdivisor;
  for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      Greatestdivisor = i;
    }
  }
  return Greatestdivisor;
}

// console.log(greatestCommonDivisor(14, 21));

function removeDuplicate(arr) {
  let visited = {};
  let result = [];
  let elem;
  for (let i = 0; i < arr.length; i++) {
    elem = arr[i];
    if (!visited[elem]) {
      result.push(elem);
      visited[elem] = true;
    }
  }
  return result.sort((a, b) => a - b);
}
let numArr = [11, 12, 11, 12, 14, 14, 151, 15, 16, 17, 18, 17];
// console.log(removeDuplicate(numArr));

function mergeTwoSortedArray(arr1, arr2) {
  return arr1.concxat(arr2).sort((a, b) => a - b);
}

// console.log(mergeTwoSortedArray([12, 14, 15, 116], [1, 2, 3, 4, 5]));

function swapVarWithoutTemp(a, b) {
  a = a + b; // we are inserting a in the b;
  b = a - b; // now we are removing a from the b
  a = a - b; //  now we have old a value just need to remove the a and we get value pf b and updating the a as b
  console.log(a, b);
  return true;
}

// console.log(swapVarWithoutTemp(4, 2));

function swapingWithTemp(a, b) {
  let temp = a;
  a = b;
  b = temp;
  console.log(a, b);
}

// console.log(swapingWithTemp(3, 2));

function reversreString(str) {
  // 1s way
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  // 2nd way
  // let result = str.split("").reverse().join("");
  return result;
}

// console.log(reversreString("hello"));

//  reverising all the words of the sentence
function reverseWord(word) {
  let reversed = word.split(" ").reverse().join(" ");
  console.log(reversed);
}
// console.log(reverseWord("my name is ujjwal"));

// reverse in place
// means  str = >   "my name is ujjwal" =>   "ym eman si lawjju";

function reverseAtPlace(str) {
  let reversed = str
    .split(" ")
    .reverse()
    .join(" ")
    .split("")
    .reverse()
    .join("");
  return reversed;
}

// console.log(reverseAtPlace("hello see this please"));

let string = "hello see this";

// console.log(string.split("").reverse().join(""));
// console
// 	.log
// 	string.split(" ").reverse().join(" ").split("").reverse().join(" ")
// 	();

//  first non repeating charactar in a string
// for example   str =>  "ujjwal"  so wal are the non repeating but u is first  so the answer is w

function nonRepeating(str) {
  let charCount = {};
  let elem;
  let count1Elem = [];
  for (let i = 0; i < str.length; i++) {
    elem = str[i];
    if (charCount[elem]) {
      charCount[elem]++;
    } else {
      charCount[elem] = 1;
    }
  }
  // if we want first non repeating char than use this
  // for (let i in charCount) {
  // 	if (charCount[i] === 1) {
  // 		return i;
  // 	}
  // }
  // if we  want all the number that have count 1 than use this
  for (let i in charCount) {
    if (charCount[i] === 1) {
      count1Elem.push(i);
    }
  }
  return count1Elem.join(" ");
}

// console.log(nonRepeating("ujjwal"));

// remove duplicate char from a string

function removeDuplicateFromString(str) {
  let result = [],
    visited = {},
    elem;
  for (let i = 0; i < str.length; i++) {
    elem = str[i];
    if (!visited[elem]) {
      visited[elem] = 1;
    } else {
      visited[elem]++;
    }
  }
  for (let i in visited) {
    if (visited[i] === 1) {
      result.push(i);
    }
  }
  return result.join(" ");
}

// console.log(removeDuplicateFromString("ujjwal"));

function checkPalingdromeStr(str) {
  let len = str.length / 2;
  for (let i = 0; i < len; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// console.log(checkPalingdromeStr("madlam"));

// find a missing number in a array;

function findMissing(arr) {
  let b;
  for (let i = 0; i < arr.length - 1; i++) {
    b = arr[i] + 1;
    if (arr[i + 1] !== b) {
      return b;
    }
  }
  return false;
}
// console.log(findMissing([1, 2, 3, 4, 5, 6, 7]));

// now we need to find the pair which sum = input sum
// naive method to solve this
function sumOfTwo(arr, sum) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }
  return false;
}

// console.log(sumOfTwo([1,2,3,4,5,6,1],9));

// finding the longest prefix in a string

// functions that returns the elements at the odd position

let strsArray = ["flower", "flow", "flight", "fight"];
let prefix = strsArray[0];
// console.log(strsArray[1].indexOf(prefix));

// ok so i got it  what this thing it returns 0 when the all the character in the string matches
// if not it returns -1

function longestPrefix(strs) {
  let prefix = strs[0];
  if (str.length === 0) return prefix;
  for (let i = 1; i < strs.length; i++) {
    while (strsArray[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
}

// console.log(longestPrefix(strsArray));

// Roman to integer

// const romanToInteger = (roman)=>{
// 	let romanStr = roman.toLowerCase();
// 	const map = {i:1,v:5,x:10,l:50,c:100,d:500,m:1000};
// 	for(let i=0;i<romanStr.length;i++){

// 	}

// }

const reversingString = (str) => {
  return str
    .split(" ")
    .reverse()
    .join(" ")
    .split("")
    .reverse()
    .join("")
    .split(" ")
    .reverse()
    .join(" ");
};

console.log(reversingString("ujjwal gupta"));
