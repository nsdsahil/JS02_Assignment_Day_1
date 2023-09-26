let rooElement=document.getElementById("root");
let search=document.getElementById("search");
let searchButton=document.getElementById("search-button")

searchButton.addEventListener("click",function(){
    rooElement.innerHTML="";
    fetch(`https://www.omdbapi.com/?apikey=8d08c9f9&s=${search.value}`)
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        data=res.Search;
        printData(data);
    })
    .catch((error)=>
    {
        console.log(error)
    })

})

let apikey="8d08c9f9"
function printData(data){
    data.forEach((movie)=>{
        let card=document.createElement("div");
        let title=document.createElement("p")
        let year=document.createElement("p");
        let poster=document.createElement("img");
        let type=document.createElement("p");
        let imdbId=document.createElement("p")

        poster.className="poster"
        card.className="card"



        title.innerText=movie.Title;
        poster.setAttribute("src",movie.Poster);
        year.innerText=movie.Year;
        type.innerText=movie.Type;
        imdbId.innerText=movie.imdbID
        card.append(poster,title,year,type,imdbId);
        rooElement.append(card);
        

        
    })
    
 

}