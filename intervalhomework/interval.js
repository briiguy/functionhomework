

// PART 0 
// Write a function that calculates the sum of all the numbers in an array */
var sumOfArray=function(array){
    var sum=0
   	for(var i=0;i<array.length;i=i+1){
       	sum=sum+array[i]
}
    return sum
}
console.assert(sumOfArray([1, 2]) === 3); console.assert(sumOfArray([]) === 0); console.assert(sumOfArray([1, 2, 3]) === 6); console.assert(sumOfArray([10, 9, 8]) === 27);


// PART 1

// Write a function maxOfArray() that takes an array of // numbers as an argument and finds the highest number.

var maxOfArray = function(array){
    
    var highest=array[0]
    
   for(var i=0;i<array.length;i=i+1){
       if(isNaN(array[i])){return "not a number homie G"}
     if (array[i]>highest){
         highest=array[i]
     }
      
   }

 return highest
}

console.assert(maxOfArray([2,4,3]) === 4); console.assert(maxOfArray([10,9,8,100,7,6]) === 100); console.assert(isNaN(maxOfArray([1,2,'bucklemyshoe'])))

/**

PART 2 *
Write a function isVowel() that takes a character (i.e. a string of length 1)
and returns true if it is a vowel, false otherwise. */
function isVowel(symbol){
    
 var vowels=['a','A','e','E','i','I','o','O','u','U','y','Y'] 
 	for(var i=0;i<12;i=i+1){
  		if(symbol===vowels[i]){return true}   
 }
    return false
} // YOUR CODE HERE }

console.assert(isVowel(0) === false); console.assert(isVowel("B") === false); console.assert(isVowel("b") === false); console.assert(isVowel("a") === true); console.assert(isVowel("E") === true);

/**

Part 3 *
Define a function reverse() that computes
the reversal of a string. For example,
reverse("skoob") should return the
string "books". */
var reverse=function(string){
    var inverse=[]
    for(var i=string.length-1;i>-1;i=i-1){
        
        
    	inverse.push(string[i])
    }
    
    return inverse.join('')
}
console.assert(reverse("books") === "skoob"); console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/**

Part 4 *
write a function the returns a FizzBuzz string for some number N (counting up from 1).
- for every number that isn't a multiple of 3 or 5, return a period "."
- for every number that is a multiple of 3 (but not 5), return "fizz"
- for every number that is a multiple of 5 (but not 3), return "buzz"
- for every number that is a multiple of 3 and 5, return "fizzbuzz" */
var fizzbuzz=function(n){
    var fizzString=[]
    for(var i=1;i<n+1;i=i+1){
        
        if(i%3!=0 && i%5!=0){fizzString[i]="."}
    	if(i%3==0 && i%5!==0){fizzString[i]="fizz"}
    	if(i%3!=0 && i%5==0){fizzString[i]="buzz"}
    	if(i%3==0 && i%5==0){fizzString[i]="fizzbuzz"}
        
        
    }
    return fizzString.join('')
}
console.assert(fizzbuzz(1) === "."); console.assert(fizzbuzz(2) === ".."); console.assert(fizzbuzz(3) === "..fizz"); console.assert(fizzbuzz(5) === "..fizz.buzz"); console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")

/**

Part 5 *
Write a function findLongestWord() that takes a string of words and returns the longest word.
i.e. findLongestWord("a book full of dogs") should return "book" */
function findLongestWord(sentence){
    var array=sentence.split(" ")
    var biggest=0
    var biggestword=0
    
    for(var i=0;i<array.length;i++){
         
        if(array[i].indexOf("'")>0){   if(array[i].length-1>biggest){
            biggest=array[i].length-1 
            biggestword=array[i]}}
        else{if(array[i].length>biggest){biggest=array[i].length 
            biggestword=array[i]}}
    }
    
return biggestword



}

console.assert(findLongestWord("a book full of dogs") === "book"); console.assert(findLongestWord("don't mess with Texas") === "Texas")

/**
PART 6 *
write a function that returns the Greatest Common Denominator of two numbers
- if no GCD exists, return 1 */
var GCD=function(num1,num2){
    var LN=0
    if(num1>=num2){LN=num1}
    if(num2>=num1){LN=num2}
    for(var i=LN;i>2;i=i-1){
    
    if(num1%i==0 && num2%i==0){return i}    
    }
 return 1
}

console.assert(GCD(5,1) === 1); console.assert(GCD(15,3) === 3); console.assert(GCD(15,5) === 5); console.assert(GCD(50,20) === 10);