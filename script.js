var myVar;
var i = 0;

function myFunction() {

    myVar = setInterval(changePic, 3000);
}

function changePic() {
    
    if (i == 0) {
        i = 1;
        document.getElementById("change").src = "/images/images/1.jpg";

    } else if (i == 1) {
        i = 2
        document.getElementById("change").src = "/images/images/2.jpg";
    } else if (i == 2) {
        i = 3;
        document.getElementById("change").src = "/images/images/3.jpg";
    } else {
        i = 0;
        document.getElementById("change").src = "/images/images/4.jpg";
    }
}