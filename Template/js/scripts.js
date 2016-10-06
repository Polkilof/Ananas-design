$(document).ready(function() {

	$('.sub-nav li a, #menu ul li a').click(function(e){
		var href = $(this).attr("href"),
		offsetTop = href === "#" ? 0 : $(href).offset().top;
		$('html, body').stop().animate({ 
			scrollTop: offsetTop
		}, 1500);
		e.preventDefault();
	});

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll > 100) {
			$(".top-line").addClass("scrolled");
		}else{ (scroll <= 100)
			$(".top-line").removeClass("scrolled");
	}});

	$(window).on("load",function(){
		$(".mCustomScrollbar").mCustomScrollbar();
	});

	$(function() {if (GBrowserIsCompatible()) {
		var map = new GMap2(document.getElementById("map_canvas"));
			map.setCenter(new GLatLng(57.13911, 65.55897), 17);
			map.addControl(new GSmallMapControl());map.addControl(new GMapTypeControl());
		var myexIcon = new GIcon();myexIcon.image = "img/ico_map.png";
			myexIcon.iconSize = new GSize(62, 78);
			myexIcon.iconAnchor = new GPoint(35, 68);
			myexIcon.infoWindowAnchor = new GPoint(4, 4);
			markerOptions = { icon:myexIcon };
			point = new GLatLng(57.13906, 65.55872);map.addOverlay (new GMarker(point, markerOptions));
			map.disableScrollWheelZoom();
	}});

	$(function () {
		$('.datepicker-here').data('datepicker')
	});


	var el = document.querySelector('.c-rating');
	var currentRating = 0;
	var maxRating= 5;
	var myRating = rating(el, currentRating, maxRating);


	$(".popup").magnificPopup();
	$('.close').on( "click", function() {
		$.magnificPopup.close();
	});

	$("#popup").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.magnificPopup.close();
			}, 1000);
		});
		return false;
	});
	
});