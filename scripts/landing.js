
var pointsArray = document.getElementsByClassName('point');

 var animatePoints = function(points) {

     var revealPoints = function(pointsIndex){

         points[pointsIndex].style.opacity = 1;
         points[pointsIndex].style.transform = "scaleX(1) translateY(0)";
         points[pointsIndex].style.msTransform = "scaleX(1) translateY(0)";
         points[pointsIndex].style.WebkitTransform = "scaleX(1) translateY(0)";

     };

     for(var i=0; i<points.length; i++){
       revealPoints(i);
   }

 };

 window.onload = function() {

   if (window.innerHeight > 950) {
         animatePoints(pointsArray);
     }

   var sellingPoints = document.getElementsByClassName('selling-points')[0];

   window.addEventListener('scroll', function(event) {
      console.log("Current offset from the top is " + sellingPoints.getBoundingClientRect().top + " pixels");
    });

}
