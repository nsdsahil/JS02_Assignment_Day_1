 let btn=document.querySelectorAll(".add");
 let prices=document.querySelectorAll(".price");
 let food=document.querySelectorAll(".food");
 let images=document.querySelectorAll(".image")
 let orderId=10000;
 let ordersDetails=[];
 let display= document.querySelector("#display");
 let ordersTable=document.querySelector("#orders");
 let popUp=document.querySelector("#pop-up");
 let warn=document.getElementById("warn")
 let tempArr=[];
 let ids=[];
 let flag=false;
 
 for(let i=0;i<btn.length;i++){
    btn[i].addEventListener("click",function(){
        flag=true;
        if(flag){
        let temp={};
        temp.OrderId=++orderId;
        temp.name=food[i].innerText;
        temp.price=prices[i].innerText;
        ordersDetails.push(temp);
        let img=document.createElement("img")
        img.setAttribute("src",images[i].getAttribute("src"));
        console.log(images[i].getAttribute("src"))
        
        let tableRow=document.createElement("tr");
        let tableData=document.createElement("td");
        tableRow.append(img)
         tableData.innerText=`Order Id ${temp.OrderId} ${temp.name} @ ${temp.price}`;
         tableRow.append(tableData);
         ordersTable.append(tableRow);
         tempArr.push(tableRow)
         ids.push(temp.OrderId)
        }
        else{
            warn.innerText="wait untill your previous order processing"

        }
    }) 
}


document.getElementById("placeOrder").addEventListener("click",function(){
    if(flag){
    for(let i=0;i<tempArr.length;i++){
        let statusBtn=document.createElement("button");
        statusBtn.innerText="processing";
        statusBtn.style.backgroundColor="yellow";
        tempArr[i].append(statusBtn)
        
        let status= new Promise(function(resolve,reject){
            let time=Math.floor(Math.random()
            *6000)+1000
            setTimeout(after,time);
            function after(){
                resolve(
                    run()
                )
            }
            function run(){
                statusBtn.innerText="Ready";
                statusBtn.style.backgroundColor="green"
                statusBtn.style.color="white";
                let heading=document.createElement("h2")
                heading.className="head-top-right"
                heading.innerText=` Order Id: ${ids[i]}`
                popUp.append(heading)
                popUp.append(tempArr[i])
                popUp.style.display="block"
                popUp.style.backgroundColor="white";
                setTimeout(function(){
                    popUp.style.display="none";
                    flag=true;
                    popUp.innerHTML="";
                    warn.innerText="Please order again"
                    tempArr=[]
                    console.log(flag)
                },6000)
                
            }
            

            })
        
    }
    flag=false;
}
else{
    warn.innerText="please wait for some time "

}
})



    




   
    
 