let count=0;
let result =document.getElementById("Num");


function decrease(){
    result.innerHTML=--count;
}

function increase(){
    result.innerHTML=++count;
}
function reset(){
    count=0;
    result.innerHTML=count;
}
