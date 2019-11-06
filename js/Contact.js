var klikLike=0;
var klikDisLike=0;

function groen(){
    if (klikLike==0) {
        document.getElementById("body").style.backgroundColor= "green";
        klikLike=1;
    } else {
        document.getElementById("body").style.backgroundColor= "darkgrey";
        klikLike=0;
    }


}

function rood(){
    document.getElementById("body").style.backgroundColor= "red";
    
    
    }