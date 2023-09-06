// fill in javascript code here

// let name=document.querySelector("#name")
// let employeeID=document.querySelector("#employeeID")
// let department=document.querySelector("#department")
// let exp=document.querySelector("#exp")
// let email=document.querySelector("#email")
// let mbl=document.querySelector("#mbl")

let Name=document.querySelector("#name")
let employeeID=document.querySelector("#employeeID")
let department=document.querySelector("#department")
let exp=document.querySelector("#exp")
let email=document.querySelector("#email")
let mbl=document.querySelector("#mbl")
let empData=[]
let formInput=document.querySelector("form");
formInput.addEventListener("submit",insert)
function insert(){
    event.preventDefault()
    // role
    let role=""
    if(exp.value>5) role="Senior"
    else if(exp.value>=2 && exp.value<=5) role="Junior"
    else if(exp.value<=1) role="Fresher"
    
    let tableRow=document.createElement("tr")
    let tableBody=document.querySelector("tbody")
    tableBody.append(tableRow);
    let obj={
        empName:Name.value,
        emplId:employeeID.value,
        departmentName:department.value,
        experience:exp.value,
        eml:email.value,
        moblN:mbl.value,
        jobRole:role,
    }
    for(let keys in obj)
    {
     let tableData=document.createElement("td")
     tableData.innerText = obj[keys]
     tableRow.append(tableData)   
    }
    let btn=document.createElement("button")
    btn.innerText="Delete"
    let tableData=document.createElement("td")
    tableRow.append(tableData)
    tableData.append(btn)

    btn.addEventListener("click",function(){
        tableRow.innerHTML=""
    })
    empData.push(obj)
    formInput.reset()
    
}