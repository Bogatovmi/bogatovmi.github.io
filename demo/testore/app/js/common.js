$(function() {


	$(document).ready(function(){

		//Активация слайдера Slick Slider
		$('.galery-home-page').slick({
		  slidesToShow: 1,
		  autoplay: true,
		  fade: true,
		  speed: 800,
		  infinite: true,
		  dots: true,
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		      	slidesToShow: 1,
		        arrows: false		        
		      }
		    }
		  ]
		});

		$('.popular-goods-galery, .new-goods-galery').slick({
		  slidesToShow: 4,
		  slidesToScroll: 4,
		  swipeToSlide: true,
		  responsive: [{

		    breakpoint: 1200,
		      	settings: {
		        	slidesToShow: 3,
		        	slidesToScroll: 3
		        }

    	}, {

		     breakpoint: 992,
		      	settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		        }
		}, {

		     breakpoint: 600,
		      	settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		        }        

	    }]
		
		});

		$('.popular-posts-galery').slick({
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  swipeToSlide: true,
		  swipeToSlide: true,
		  responsive: [{

		    breakpoint: 1200,
		      	settings: {
		        	slidesToShow: 2,
		        	slidesToScroll: 2
		        }

    	}, {
			    breakpoint: 768,
		      	settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		        }        

	    }]
		
		});


	});


//Nav-bar
	$('#navbar-icon').click(function(){
		$(this).toggleClass('open');
	});

	$("#navbar-icon").click(function() {
		if ($(".hamb-nav-menu").is(":visible")) {
			$(".hamb-nav-menu").fadeOut(600);
			$(".hamb-nav-menu li a").removeClass("fadeInUp animated");
			$('#navbar-icon').toggleClass('open');
		} else {
			$(".hamb-nav-menu").fadeIn(300);
			$(".hamb-nav-menu li a").addClass("fadeInUp animated");
		};
	});

	$(".hamb-nav-menu li a").click(function() {
			$(".hamb-nav-menu").fadeOut(300);
			$(".hamb-nav-menu li a").removeClass("fadeInUp animated");
			$('#navbar-icon').toggleClass('open');
	});

	$(document).mouseup(function (e){  // событие клика по веб-документу
		if ($(".hamb-nav-menu").is(":visible")) { 
				var div = $(".hamb-nav-menu"); // тут указываем ID элемента
				if (!div.is(e.target) // если клик был не по нашему блоку
		 		&& div.has(e.target).length === 0) { // и не по его дочерним элементам
				$(".hamb-nav-menu").fadeOut(600);
				$(".hamb-nav-menu li a").removeClass("fadeInUp animated"); // скрываем его
				$('#navbar-icon').toggleClass('open');
				}
		}
	});

	

	function navbarOnResize() {
		if (($(".hamb-nav-menu").is(":visible")) && ($(window).width() > '752')) {
			$('#navbar-icon').toggleClass('open');
			$(".hamb-nav-menu").fadeOut(0);
			$(".hamb-nav-menu li a").removeClass("fadeInUp animated");
		}
	}

	$(window).resize(function() {
		navbarOnResize();		
	});
//Nav-bar

//Hover menu
$(function() {
	$('.hover-menu').mouseenter(function(){
	    $(this).prev().addClass("hover-link");
	});
	$('.hover-menu').mouseleave(function(){
	    $(this).prev().removeClass("hover-link");
	});
});



//Search form

$(function() {
	$('.search-input').focus(function() {
		$('.search-menu-hover').css({"display":"block"});
	});
	$('.search-menu').click(function() {
		$('.search-menu-hover').css({"display":"block"});
	});
	$('.search-input').blur(function() {
		$('.search-menu-hover').css({"display":"none"});
	});
	$('.user-menu').hover(function() {
		$('.search-menu-hover').css({"display":"none"});
	});	
	$('.shopping-cart').hover(function() {
		$('.search-menu-hover').css({"display":"none"});
	});	
	$('.hovered').hover(function() {
		$('.search-menu-hover').css({"display":"none"});
	});

	$(document).mouseup(function (e){  // событие клика по веб-документу
		if ($(".search-menu-hover").is(":visible")) { 
				var div = $(".search-menu-hover"); // тут указываем ID элемента
				if (!div.is(e.target) // если клик был не по нашему блоку
		 		&& div.has(e.target).length === 0) { // и не по его дочерним элементам
				$(".search-menu-hover").css({"display":"none"}); // скрываем его
				}
		}
	});
});

//Search form



	// Custom JS
	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	        document.getElementById("btn-top").style.display = "block";
	    } else {
	        document.getElementById("btn-top").style.display = "none";
	    }
	}

	$(function() {

	  $('#btn-top').click(function() {
	    $('html, body').animate({scrollTop: 0},500);
	    return false;
	  })

	})

});


