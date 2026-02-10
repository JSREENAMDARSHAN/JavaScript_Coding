function greet(name,callback){
    console.log("hello ",name);
    callback();
}
function sayBye()
{
    console.log("Good Bye");
}
greet("darshan",sayBye);