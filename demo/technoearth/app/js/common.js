$(function() {


	$(document).ready(function(){
		$('.galery-items').slick({
		  centerMode: true,
		  centerPadding: '100px',
		  slidesToShow: 1,
		  infinite: true,
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        dots: true,
		        centerMode: false		        
		      }
		    }
		  ]
		});
	});

 	$(".popup-form").magnificPopup({
		type:"inline",
		midClick: true
	});
	// Custom JS

});
