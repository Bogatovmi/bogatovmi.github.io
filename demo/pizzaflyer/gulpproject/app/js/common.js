$(function() {

//Animate block
	window.onload = function() {
		
		$(".baner").animated("fadeInRight", "fadeOutRight");
		$(".pick").animated("fadeInUp");
		$(".header-picks").animated("fadeInUp");
		$(".slogan h2").animated("fadeInLeft", "fadeOutRight");
		$(".slogan .about").animated("fadeInRight", "fadeOutLeft");
		$(".footer-left").animated("fadeInLeft", "fadeOutRight");
		$(".footer-right").animated("fadeInRight","fadeOutLeft");

	}

	// Change heigth of block - header

	function heightDetect() {
		$(".main").css("height", $(window).height());
	};
	heightDetect();
	



	//Change heigth block - about

	function heightAbout() {
		var heigthleft = $(".slogan h2").outerHeight(true);
		$(".about").css("height", heigthleft);
	}
	heightAbout();

	function heightFooter() {
		var heigthleft = $(".footer-left").outerHeight(true);
		$(".footer-right").css("height", heigthleft);
	}
	heightFooter();

	$(window).resize(function() {
		heightDetect();
		heightAbout();
		heightFooter();
	});



});




