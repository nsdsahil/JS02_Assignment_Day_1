let Display=document.querySelector("#display")
let stopBtn=document.querySelector("#stop");
let startBtn=document.querySelector("#start");
let resetBtn=document.querySelector("#reset");
let sec=0;
let hr=0;
let minut=0;
let miliSec=0;
let secInterval;
let flag=true;
Display.innerText=sec+`s`;

function start(){
    miliSec+=1;
    // HIDING HR AND MINUTE IT THEY ARE ZERO
    if(hr>0) Display.innerText= hr+`:`+minut+`:`+sec+`s`+` `+ miliSec;
    else if(minut>0 && hr==0) Display.innerText= minut+`:`+sec+`s`+` `+  miliSec; 
    else Display.innerText=sec+`s`+` `+      miliSec; 
    // HIDING END

    if(miliSec==100){
        sec+=1;
        Display.innerText= sec+`s`+` `+  miliSec;
        miliSec=0;
    }

    if(sec==60){
        minut+=1;
        Display.innerText= minut+`:`+sec+`s`+` `+ miliSec; 
        sec=0;
    }
    if(minut==60){
        hr+=1;
        Display.innerText= hr+`:`+minut+`:`+sec+`s`+` `+  miliSec; 
        minut=0;
    }
}

startBtn.addEventListener("click",function(){
    if(flag){
        flag=false;
        secInterval=setInterval(start,10);

    }
})
stopBtn.addEventListener("click",function(){
    clearInterval(secInterval)
    flag=true;
})
resetBtn.addEventListener("click",function(){
    flag=true;
    miliSec=0;
    sec=0;
    hr=0;
    minut=0;
    Display.innerText=sec+`s`;
    clearInterval(secInterval)
})

