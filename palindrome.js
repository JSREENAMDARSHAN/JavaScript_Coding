let str1 = "dad";
let nstr="";
for(let i = str1.length-1;i>=0;i--){
    nstr = nstr + str1.charAt(i);
} 
console.log((str1===nstr) ? "It is a palindrome" : "not a palindrome");