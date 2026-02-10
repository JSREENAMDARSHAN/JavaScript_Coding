let arr = [1,2,3,4,5];
let left = 0,right = arr.length-1;
let k = 4;
while(left<=right){
    let mid = Math.floor(left+(right-left)/2);
    if(arr[mid] == k){
        console.log(`Element ${k} found at index : `,mid);
        break;
    }
    if(arr[mid]<k){
        left = mid+1;
    }
    else{
        right = mid-1;
    }
}