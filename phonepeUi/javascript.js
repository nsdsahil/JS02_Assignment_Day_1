let amount=document.getElementById("amount")
let upiId=document.getElementById("upi-id")
let pay=document.getElementById("pay")
let alertSuccess=document.getElementById("alert-success")
let alertFailure=document.getElementById("alert-failure")
let process=document.getElementById("processing");
let ok=document.getElementById("ok");
let retry=document.getElementById("retry");
let alert=document.getElementById("alert")
let balance=5000;
pay.addEventListener("click",()=>{
        alert.innerText=""
        payment()
        .then(()=>{
            processing()
            setTimeout(()=>{
                process.style.display="none"
                alertSuccess.style.display="block"
            },5000)
        })
        .catch(()=>{
            processing()
            setTimeout(()=>{
                process.style.display="none"
                alertFailure.style.display="block"
            },5000)
        })
    
})
ok.addEventListener("click",()=>{
    alertSuccess.style.display="none"
})
retry.addEventListener("click",()=>{
    alertFailure.style.display="none"
})

function processing(){
    process.style.display="block"
}
function payment(){
    return new Promise((resolve,reject)=>{
    if(amount.value=="") alert.innerText=`please enter some amount`
    else if(amount.value<=0) alert.innerText=`enter some valid amount`
    else if(amount.value<=balance) resolve();
    else reject() 

})
}
