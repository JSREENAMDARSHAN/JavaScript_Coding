let arr = [1,2,13,4];
let max_num = Number.MIN_SAFE_INTEGER;
for(let i of arr){
    if(i>max_num){
        max_num = i;
    }
}
console.log(max_num);