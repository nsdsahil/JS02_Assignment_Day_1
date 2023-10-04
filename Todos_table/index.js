let tbody=document.getElementById("tbody")
let search=document.getElementById("search")
let searchbtn=document.getElementById("search-button")
let allUsers=document.getElementById("all-users")

let url="https://jsonplaceholder.typicode.com/todos"



async function getData(){
try {
    let res= await fetch(url)
    let data=await res.json();
    print(data);
    
} catch (error) {
    console.log(error)
}}

getData()

function print(data){
    data.forEach(user => {
        let tr=document.createElement("tr")
        let td1=document.createElement("td")
        td1.textContent=user.userId

        let td2=document.createElement("td")
        td2.textContent=user.id

        let td3=document.createElement("td")
        td3.textContent=user.title

        let td4=document.createElement("td")
        td4.textContent=user.completed

        tr.append(td1,td2,td3,td4)

        tbody.append(tr)

    });
}

// -------------------Searching---------------------------
searchbtn.onclick=()=>{
    url=`https://jsonplaceholder.typicode.com/todos/${search.value}`
    tbody.innerHTML=""
    async function getUser(){
        try {
            let res= await fetch(url);
            let data= await res.json();
            let user=data;
                let tr=document.createElement("tr")
                let td1=document.createElement("td")
                td1.textContent=user.userId
 
                let td2=document.createElement("td")
                td2.textContent=user.id

                let td3=document.createElement("td")
                td3.textContent=user.title

                let td4=document.createElement("td")
                td4.textContent=user.completed

                tr.append(td1,td2,td3,td4)

                tbody.append(tr)
            
        } catch (error) {
            
        }
    }
    getUser();
}

allUsers.onclick=()=>{
    tbody.innerHTML="";
    url="https://jsonplaceholder.typicode.com/todos"
    getData();
}