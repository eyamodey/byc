
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
