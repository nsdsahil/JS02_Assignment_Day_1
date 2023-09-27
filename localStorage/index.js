let form1=document.getElementById("data");
let name=document.getElementById("name");
let age=document.getElementById("age");
let tbody=document.getElementById("tbody");
form1.addEventListener("submit",(event)=>{
    event.preventDefault();
    localStorage.setItem("Name", name.value);
    localStorage.setItem("age", age.value);
    form1.reset();
})
function getData(){
    let tr2=document.createElement("tr");
    let td3=document.createElement("td");
    let td4=document.createElement("td");
    td3.innerText=localStorage.getItem("Name");
    td4.innerText=localStorage.getItem("age");
    tr2.append(td3,td4);
    tbody.append(tr2);
}



