let input=document.getElementById("input");
let heading=document.getElementById("head");
let error=document.getElementById("error");
let min=0
let hr=0
let sec=0;
let runningInterval=true;
let interval;
// START button
document.querySelector("button").addEventListener("click",function(){
    if(runningInterval && input.value!=""){
        fetchTime();
        if(sec>0 && hr>=0 && min>=0){
            interval=setInterval(start,100);
        runningInterval=false;

        }
        else{
            error.innerText="Please fill value in correct format"

        }  
    }
    else{
        error.innerText="you have'nt enterd value or timer is already runnig"
    }

})
// pause button
document.querySelector("#pause").addEventListener("click",function(){
    clearInterval(interval);
    runningInterval=true;
})

// reset button
document.querySelector("#reset").addEventListener("click",function(){
    input.value=""
    runningInterval=true;
})

function fetchTime(){
    let number=input.value;
    let temp=[]
    temp=number.split(":");
    hr=temp[0];
    min=temp[1];
    sec=temp[2];
    console.log(min)
}
function start(){
    console.log(min,hr)
    
    if( min=="00" && hr=="00" && sec=="00")
    {
        clearInterval(interval);
        runningInterval=true;
        error.innerText="Please fill some values other than zero"
        return;     
    }  
    sec--;
    // console.log(min)
    input.value=`${hr}:${min}:${sec}`
    // console.log(hr)
    if(sec==0 && min>0)
    {
        
        min--;
        sec=60;
        input.value=`${hr}:${min}:${sec}`
    }
    else if(min==0 && hr>0)
    {
        hr--;
        min=60;
        input.value=`${hr}:${min}:${sec}`
    }
    else if(min==0 && hr==0 && sec==0)
    {
        clearInterval(interval);
        runningInterval=true;
    }     
}
let int="08"
console.log(int--)

