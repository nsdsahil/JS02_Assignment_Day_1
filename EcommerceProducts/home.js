let rootElement=document.getElementById("root");
let search=document.getElementById("search");
let searchButton=document.getElementById("search-button");
let descending=document.getElementById("high-to-low");
let ascending=document.getElementById("low-to-high");

let url="https://fakestoreapi.com/products";
let arr=[]



async function getData(){
try {
    let res=await fetch(url);
    let data=await res.json()
    print(data);
} catch (error) {
    
}}

getData();

function print(data){
    arr=data;
    
    data.forEach(product => {
        let div=document.createElement("div")
        let title=document.createElement("h3")
         title.textContent=product.title;
        div.className="product"


        let image=document.createElement("img")
        image.className="image";
        image.setAttribute("src",product.image)

        let price=document.createElement("p");
        price.innerHTML=`<b>Price</b> ${product.price}`;

        let description=document.createElement("p")
        description.textContent=product.description;

        let id=document.createElement("p");
        id.textContent=product.id;

        let category=document.createElement("p")
        category.innerHTML=`<b>Category: </b> ${product.category}`;
        
        div.append(image,title,price,category,description)
        rootElement.append(div)
    });
}

// filter data

searchButton.onclick=()=>{
    rootElement.innerHTML=""
    getData2();
    
}

function filterData(data){
    let filtered= data.filter(product=>{
    
        let searched=search.value.toString().toLowerCase()       
        if(product.title.toLowerCase().includes(searched)){
            return product;

        }  
        }) 
    return filtered;
    
}
async function getData2(){
    try {
        let res= await fetch(url);
        let data= await res.json();
        print(filterData(data));
    } catch (error) {
        console.log(error)
        
    }
    
}
// sorting-----------------------------------------------
ascending.onclick=()=>{
    rootElement.innerHTML=""
    descending.style.color="black";
    ascending.style.color="rgb(56, 192, 251)"
    print(lowToHigh(arr))
    
}

function lowToHigh(data){
     return data.sort((a,b)=>{
         return a.price-b.price
    })   
}

descending.onclick=()=>{
    ascending.style.color="black"
    descending.style.color="rgb(56, 192, 251)";
    descending.style.border.left="rgb(56, 192, 251)";
    rootElement.innerHTML="";
    print(highToLow(arr));
    
}
function highToLow(data){
    return data.sort((a,b)=>{
        return b.price-a.price
   })   
}





// dropdown----------------------------------------------
document.querySelector(".dropdown").addEventListener("mouseover",()=>{
    document.querySelector(".dropdown-menu").style.display="block"
})


document.querySelector(".dropdown").addEventListener("mouseout",()=>{
    document.querySelector(".dropdown-menu").style.display="none"
})


