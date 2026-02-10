let promise = new Promise((resolve,reject) => {
    let success = true;
    if(success){
        resolve("Task done");
    }
    else{
        reject("Task failed");
    }
});

promise
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error));