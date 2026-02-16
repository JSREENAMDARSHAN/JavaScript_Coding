async function payment() {
    return "Payment done";
}
async function checkout() {
    let res = await payment();
    console.log(res);
}

checkout();