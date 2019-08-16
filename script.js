//   every 3 seconds replacing the picture in the home page
var myVar;
var i = 0;

//   this function setting an interval of 3 second and call the function
//   changePic at the end of each interval
function myFunction() {

    myVar = setInterval(changePic, 3000);
}
//    this function replaces the picture in home page in an order
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