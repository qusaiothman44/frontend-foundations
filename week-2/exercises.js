/*reverse string
function reverse(str) {
    let newStr='';
for (let x = str.length -1; x >= 0; x--) {
  newStr=newStr + str[x];
} 
console.log(newStr)   
}

reverse("hello")

// isPalindrome
 function isPalindrome(str){
     
    let y= str.length -1;

    for (let I = 0; I < str.length / 2; I++) {
if(str[I] != str[y]){
  return false
}      
y--;
    }
    return true
 }

 console.log(isPalindrome("level"))
 

// FizzBuzz

function FizzBuzz(num){
  if(num % 3 == 0 && num % 5 == 0){
    console.log("FizzBuzz");
  }else if(num % 3 == 0 && num % 5 != 0){
    console.log("Fizz");
  }else if(num % 3 != 0 && num % 5 == 0){
console.log("Buzz");
  }else{
    console.log(num);
  }
}

FizzBuzz(7)


// Find the Largest Number
function findLargest(numbers){
  let y =0;
for (let i = 0; i < numbers.length; i++) {
  if(numbers[i] >= y){
    y=numbers[i]
  }
}  
console.log(y)
  }

  const arr=[1,4,3];

  findLargest(arr)
*/

  // Sum of Numbers
  function sumNum(arr){
    let y =0;
    for (let i = 0; i < arr.length; i++) {
      y = y + arr[i];
      
    }
    console.log(y)
  }
  const arr=[1,4,3];
sumNum(arr);