let arr = [1,1,2,3,4];
const freq = new Map();
for(const item of arr){
    freq.set(item,(freq.get(item)??0)+1);
}
let maxFreq = 0;
let mostRepeatedKey = null;
for(const[key,value] of freq){
    if (value > maxFreq) {
    maxFreq = value;
    mostRepeatedKey = key;
  }
}
console.log(`The winner is ${mostRepeatedKey} with ${maxFreq} occurrences.`);