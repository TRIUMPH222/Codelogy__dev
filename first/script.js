


function show(){
    document.getElementById("links").style.transform = "translateY(-100%)";
    if(document.getElementById("gg").textContent === "&#9776;"){

    }
    else{
        document.getElementById("gg").textContent ="x";
        document.getElementById("links").style.transform = "translateY(0)";
    }
    
}