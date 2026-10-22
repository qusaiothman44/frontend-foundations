// reverse string
function reverse(str) {
    let newStr='';
for (let x = str.length -1; x >= 0; x--) {
  newStr=newStr + str[x];
} 
console.log(newStr)   
}

reverse("hello")

