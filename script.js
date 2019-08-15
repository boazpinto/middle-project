var myVar;
var i=0;

function myFunction() {
  myVar = setInterval(changePic, 3000);
}

function changePic() {
    if (i=0) {
        i=1;
document.getElementById("change").src="/mages/images/1.jpg";

      } else if (i=1) {
          i=2
          document.getElementById("change").src="/mages/images/2.jpg";
    } else if (i=1) {
        i=3;
        document.getElementById("change").src="/mages/images/3.jpg"; 
    } else {
        i=4;
        document.getElementById("change").src="/mages/images/4.jpg";
      }
}