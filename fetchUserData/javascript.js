let fetchBtn=document.getElementById("fetch-user")
let mainDiv=document.getElementById("main")



fetchBtn.addEventListener("click",function(){
     
    fetch("https://reqres.in/api/users")
    .then((res)=>{
       return res.json()
    })
    .then((res)=>{
        data=res.data
        getData(data);
    })
    .catch((error)=>{
        console.log(error) ;

    })
})

function getData(data){
    console.log(data)
    data.forEach(element => {
        let person=document.createElement("div");
        let avatar=document.createElement("img");
        let firstName=document.createElement("p")
        let LastName=document.createElement("p")
        let email=document.createElement("p");
        let id=document.createElement("p");
        person.className="card";
        avatar.className="avatar"

        avatar.setAttribute("src",element.avatar)
        firstName.innerText=`First Name: ${element.first_name}`
        LastName.innerText=`Last Name: ${element.last_name}`
        email.innerText=`Email Id: ${element.email}` 
        id.innerText=`Id: ${element.id}`  

        person.append(avatar,id,firstName,LastName,email,);
        mainDiv.append(person)


    });
}