function func(){
document.getElementById("uls").style.transform="translateY(0)";
document.getElementById("uls").style.zIndex = "1";
document.getElementById("uls").style.alignItems = "center";
document.getElementById("it").style.display ="none";
document.getElementById("its").style.display ="block";
}

function funcs(){
   if(window.innerWidth < 768){
    document.getElementById("uls").style.transform="translateY(-100%)";
   }
    document.getElementById("uls").style.zIndex = "-1";
    document.getElementById("it").style.display ="block";
    document.getElementById("its").style.display ="none";
    
}
