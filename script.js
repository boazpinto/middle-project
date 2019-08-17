//   every 3 seconds replacing the picture in the home page

var myVar;
var i = 0;
var file=["images/images/1.jpg","images/images/2.jpg",
            "images/images/3.jpg","images/images/4.jpg"]


//   this function setting an interval of 3 second and call the function
//   changePic at the end of each interval

function myFunction() {

    myVar = setInterval(changePic, 3000);
}
//    this function replaces the picture in home page in an order

function changePic() {
    document.getElementById("change").src =file[i];
    i++;
    if (i==file.length){
        i=0;
    }
}

