function outer(){
    const str = "Iam from outer scope";
    function inner(){
        console.log(str);
    }
    return inner;
}

console.log(outer()());