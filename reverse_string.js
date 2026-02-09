let str = "darshan";
let str_length = str.length;
let nstr="";
for(let i = str_length-1;i>=0;i--){
    nstr = nstr + str.charAt(i);
}
console.log(nstr);