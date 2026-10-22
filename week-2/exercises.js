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


//Count Vowels

function CountVowels(str){
  let y =0;
  for (let i = 0; i < str.length; i++) {
switch(str[i]){
  case 'a':
    y++;
    break;
     case 'o':
    y++;
    break;
     case 'u':
    y++;
    break;
     case 'i':
    y++;
    break;
      case 'e':
    y++;
    break;
    default:
      break;
}    
  }
  console.log(y)
}

const st= "hello";
CountVowels(st)



//Remove Duplicates

function RemoveDup(arr){
let arr2=[];

for (let i = 0; i < arr.length; i++) {
if(!arr2.includes(arr[i])){
  arr2.push(arr[i])
}
}
console.log(arr2)
}
const numb=['ali','mo','ali','khaled'];
RemoveDup(numb);


// Capitalize Each Word

function Capital(str){
  let arr = str.split(' ');
  let str2=''
  arr.map(x=>{
      let y = x.charAt(0).toLocaleUpperCase();
str2= str2.concat(y) + x.slice(1,x.length) +" ";
  })
 
  console.log(str2);
}

Capital('hello world');



// Filter Even Numbers

function even(arr){
  let arr2=[]

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] %2 == 0){
      arr2.push(arr[i])
    }
    
  }
  return arr2;
}

console.log(even([1,2,3,4,5,6]))



// Double Numbers
function DoubleNum(arr){
  let arr2=[]
  arr.map(x=>{
arr2.push(x*2)
  })
  console.log(arr2);
}

DoubleNum([1,2,3,4])



// Anagrams

function Anagrams(str1,str2){
  let arr1=str1.split('');
  let arr2=str2.split('');
  let y= true;
  arr1 = arr1.sort();
  arr2 = arr2.sort();
  if (str1.length == str2.length) {
    
  
  for (let i = 0; i < arr1.length; i++) {
if (arr1[i] == arr2[i]) {
y=true

} else{y=false}   
  }}else{
    y= false
  }
  return y
}

console.log(Anagrams("hello","olleh"))



// Word Frequency Counter

function Frequency(str){
  let arr= str.split(' ');
  let ob ={};

  for (let i = 0; i < arr.length; i++) {

if (ob[arr[i]]) {
  ob[arr[i]]++
} else {
    ob[arr[i]] =1
}
 

  }
  console.log(ob)
}

Frequency("hello world hello");


// Flatten a Nested Array

function flattenArray(arr){
  console.log(arr.flat(Infinity))
}

flattenArray([1,1,2,[2,4]])



//Find the Longest Word

function findLongestWord(str){
  let arr = str.split(' ');
  let str2='';
  for (let i = 0; i < arr.length; i++) {
   if (arr[i].length > str2.length) {
    str2=arr[i]
   }
    
  }
  console.log(str2)
}

findLongestWord('I love JavaScript')



// Sort Array of Objects

function sortByAge(people){
people.sort((a,b)=> a.age - b.age)
return people
}

const people = [
  { name: "Ali", age: 25 },
  { name: "Sara", age: 19 },
  { name: "Omar", age: 30 }
];

console.log(sortByAge(people))

*/

function checkExam(array1, array2) {
 // good luck
  let sum=0
  for (let i = 0; i <= array1.length; i++){
    if(array1[i] == array2[i]){
      sum=sum+ 4;
    }else if(array1[i] !== array2[i] && array2[i] !== ""){
      sum=sum -1;
    }else if(sum <0){
      sum= 0;
    }

}}