let title=document.querySelector("#title");
let authorName=document.querySelector("#Name");
let dob=document.querySelector("#dob");
let nationality=document.querySelector("#nationality");
let genre=document.querySelector("#genre");
let price=document.querySelector("#price")


function author(authorName,dob,nationality)
{
    this.name=authorName.value;
    this.birthYear=dob.value;
    this.nationality=nationality.value;
}
function book(title,author,genre,price)
{
    this.title=title.value;
    this.author=author;
    this.genre=genre.value;
    this.price=price.value;
    this.getBookInfo=function(){
        console.log(`Book Details`)
        
        console.log( `Title : ${this.title}`);
        console.log(`Author : ${this.author.name}`);
        console.log(`Genre  : ${this.genre}`);
        console.log(`Price  : ${this.price}`);
        console.log("--------------------------------------------------------")
    }
}
let bookDetails=document.querySelector("#booksDetails");
let authorDetails=document.querySelector("#authorDetails");
booksDetails.addEventListener("submit",function(){
    let book1 = new 
})