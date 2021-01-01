
// Automatically set the current year in the copyright section of footer
const today = new Date();
const siteOwner = "buildyourcapacity.org" ;
document.getElementById("copyrightInfo").innerHTML = " ©" + today.getFullYear() + " " + siteOwner ;

$('#blogCarousel').carousel({
  interval: 5000
})

$('.carousel .blog-post').each(function(){
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}

        next.children(':first-child').clone().appendTo($(this));
      }
});

// SET COUNTDOWN ON LONGRICH PAGE
// Set the date we're counting down to
const lastDay = today.getFullYear() ;
var countDownDate = new Date("Dec 31, " + lastDay + " 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in an element with id="countdown"
  document.getElementById("countdown").innerHTML = days + "days " + hours + "hours " + minutes + "min " + seconds + "sec ";
  document.getElementById("thisYear").innerHTML = lastDay;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "TIME UP!";
  }
}, 1000);
