let str = "I love programming";
let nstr = str.split(" ");
let longest = "";
for(let word of nstr){
    if(word.length > longest.length){
        longest = word;
    }
}
console.log(longest);