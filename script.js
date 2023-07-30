let count=0;
let result =document.getElementById("Num");


function decrease(){
    result.innerHTML=--count;
}

function increase(){
    result.innerHTML=++count;
}
function reset(){
    result.innerHTML=0;
}