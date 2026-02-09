let a = 0,b=1;
let res = a+" "+b+" ";
//console.log(a," ",b," ");
for(let i=3;i<8;i++){
    let c  = a+b;
    res += c+" ";
    a = b;
    b = c;
}
console.log(res);