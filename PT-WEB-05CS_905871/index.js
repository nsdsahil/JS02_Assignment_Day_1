// fill in javascript code here
let Name=document.querySelector("#name")
let docID=document.querySelector("#docID")
let dept=document.querySelector("#dept")
let exp=document.querySelector("#exp")
let email=document.querySelector("#email")
let mbl=document.querySelector("#mbl")
let docData=[]
let formInput=document.querySelector("form");
formInput.addEventListener("submit",insert)
function insert(){
    event.preventDefault()
    // role
    let role=""
    if(exp.value>5) role="Senior"
    else if(exp.value>=2 && exp.value<=5) role="Junior"
    else if(exp.value<=1) role="Trainee"
    
    let tableRow=document.createElement("tr")
    let tableBody=document.querySelector("tbody")
    tableBody.append(tableRow);
    let obj={
        docName:Name.value,
        docId:docID.value,
        deptName:dept.value,
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
    docData.push(obj)
    formInput.reset()
    
}



