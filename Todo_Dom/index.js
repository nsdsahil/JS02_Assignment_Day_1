
let TaskName=document.querySelector("#task")
let priority=document.querySelector("#priority")
let formInput=document.querySelector("form")
let data=[]

formInput.addEventListener("submit",function(){
    event.preventDefault()
    let obj={
        task:TaskName.value,
        prity:priority.value
    }
    let tableBody=document.querySelector("tbody")
    let tableRow=document.createElement("tr");
    tableBody.append(tableRow)
    for( let keys in obj)
    {
        
        let tableData=document.createElement("td")
        tableData.innerText=obj[keys]
       if(keys=="prity"){
             if(priority.value=="High") tableData.style.backgroundColor="red";
            else tableData.style.backgroundColor="green";
        }
        tableRow.append(tableData)

    }
    data.push(obj)
    formInput.reset();

})