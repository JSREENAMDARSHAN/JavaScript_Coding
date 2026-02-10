let str = "I love You love You me love code";
let nstr = str.split(" ");
let freq = new Map();
for(let word of nstr){
    freq.set(word,(freq.get(word)??0)+1);
}
for(let [key,value] of freq.entries()){
    console.log(`Key: ${key}, value: ${value}`);
}