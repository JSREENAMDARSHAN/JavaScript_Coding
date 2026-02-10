let arr = [1,2,3,4,5];
let k = 8;
let isfound = false;
let idx = 0;
for(let i = 0;i<arr.length;i++){
    if(arr[i] == k){
        idx = i;
        isfound = true;
        break;
    }
}
console.log((isfound) ? `Element found at ${idx}` :-1);
