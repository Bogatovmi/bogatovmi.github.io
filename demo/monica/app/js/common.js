$(function() {

		$('.slider-img').on('init', function(event, slick){
			$('.slider-post').addClass('animated fadeInLeft');
			setTimeout (function() { 
				$('.slider-post').removeClass('animated fadeInLeft');
			}, 700);
		});	

		$('.slider-img').slick({
			arrows: false,
			asNavFor: '.slider-label',
			fade: true,
			autoplay: true,
			autoplaySpeed: 5000,
			speed: 800,
			responsive: [
			    {
			    	breakpoint: 768,
			     	settings: {
			     		dots: true
			    	}
			    }
			]
		});

		$('.slider-label').slick({
			arrows: false,
			vertical: true,
			slidesToShow: 4,
			asNavFor: '.slider-img',
			focusOnSelect: true
		});

		

		$('.slider-img').on('beforeChange', function(event, slick, currentSlide){
		  	  $('.slider-post').addClass('animated fadeInLeft');

		});
		$('.slider-img').on('afterChange', function(event, slick, currentSlide){
		  $('.slider-post').removeClass('animated fadeInLeft');
		 });
		

	// Custom JS

});
