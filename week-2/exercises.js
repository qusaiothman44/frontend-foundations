// reverse string
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