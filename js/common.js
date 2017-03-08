'use strict';

$(document).ready(function () {

	//	// SVG Fallback
	//	if(!Modernizr.svg) {
	//		$("img[src*='svg']").attr("src", function() {
	//			return $(this).attr("src").replace(".svg", ".png");
	//		});
	//	};

	$('.products__element-min').each(function () {
		this.innerHTML = '<div class="figural-shadow"><img src="' + this.getAttribute('data-url') + '" alt="Мясо" class="figural-shadow__img"></div><span>' + this.getAttribute('data-name') + ' ›</span>';
	});

	$('.news_owl_carousel').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		items: 1,
		lazyLoad: true,
		navText: ["", ""],

		dots: true

		// responsive:{
		//       0:{
		//           dots: false
		//       },
		//       768:{
		//           dots: true
		//       }
		//   }

	});
	$('.cook_owl_carousel').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		items: 1,
		lazyLoad: true,
		navText: ["", ""],
		dots: false
	});

	$('a.slide_down, a.slide_up').anchor({
		transitionDuration: 1200
	});

	//Chrome Smooth Scroll
	// try {
	// 	$.browserSelector();
	// 	if($("html").hasClass("chrome")) {
	// 		$.smoothScroll();
	// 	}
	// } catch(err) {

	// };

	// $("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$('.cnl-tab').on('click', function () {
		var containerId = this.getAttribute('data-cnl-cont'),
		    tabId = this.getAttribute('data-cnl-tab');
		$('[data-cnl-cont="' + containerId + '"]').removeClass('active');
		$(this).addClass('active');

		$('#' + containerId).children().hide();
		$('#' + tabId).show();
	});

	if ($(window).width() > 768) {
		$('.interesting__scroll').mCustomScrollbar({});
		$('.products__element').each(function () {
			if ($(this).index()) {
				$(this).hide();
			}
		});
	}
});
$(window).load(function () {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	//	$(window).scroll(function() {
	//		if ($(window).width()>767) {
	//    	var e = $(".home_page header");
	//      var f = $("footer");
	//      var fh = $(".home_page").height()-$(window).height();
	//			
	//      window.pageYOffset >= 230 ? e.addClass("min_header") : window.pageYOffset <= 230 && e.removeClass("min_header")
	//	  
	//      window.pageYOffset >= fh ? f.removeClass("min_footer") : window.pageYOffset <= fh && f.addClass("min_footer")
	//    	// window.pageYOffset != $(document).height() - $(window).height() ? (e.show(), window.pageYOffset >= 250 ? e.addClass("min_header") : window.pageYOffset <= 250 && e.removeClass("min_header")) : e.hide()
	//		}
	//	});
	$('#carousel').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		itemWidth: 150,
		minItems: 2,
		maxItems: 3,
		itemMargin: 16,
		prevText: "",
		nextText: ""
	});

	// $('#slider').flexslider({
	//   animation: "slide",
	//   controlNav: false,
	//   animationLoop: false,
	//   slideshow: false,
	//   sync: "#carousel",

	// });
	$(".history_modal .text").mCustomScrollbar({});
	$(".newsModal .text").mCustomScrollbar({});

	$(".map .scroll_wrap").mCustomScrollbar({});

	$(".modal .close").on("click", function () {
		$(this).parents(".modal").addClass("hideModal");
		$("body").removeClass("overflov_hidden");
	});

	// $(".history_section .more").on("click", function () {
	// 	$("#history_modal").removeClass("hideModal");
	//   $("body").addClass("overflov_hidden");
	// })

	// $(".history_section .name").on("click", function () {
	//   $("#history_modal").removeClass("hideModal");
	//   $("body").addClass("overflov_hidden");
	// })

	// $(".news_section .more").on("click", function () {
	// 	$("#newsModal").removeClass("hideModal");
	//   $("body").addClass("overflov_hidden");
	// })

	// $(".news_section h3").on("click", function () {
	//   $("#newsModal").removeClass("hideModal");
	//   $("body").addClass("overflov_hidden");
	// })

	// $(".send_message").on("click", function () {
	//  	$("#messageModal").removeClass("hideModal");
	//    $("body").addClass("overflov_hidden");
	//  })

	$("footer .search .end").on("click", function () {
		$(this).parents(".search").addClass("open");
		$("#search").focus();
	});

	$("#search").blur(function () {
		$("footer .search").removeClass("open");
	});

	//	########################## 
	//	header

	$("header nav li a").on("click", function () {
		if (!$(this).parents("li").hasClass('open_submenu')) {
			$(".open_submenu").removeClass("open_submenu");
			$(this).parents("li").addClass("open_submenu");
		} else {
			$(".open_submenu").removeClass("open_submenu");
		}
	});

	$(".mob_menu_btn").on("click", function () {
		$("nav").toggleClass("active");
	});

	//	header end
	//	########################## 


	//	########################## 
	//	parallax

	$('#cook_section').parallax();
	$('#buy_section').parallax();
	$('#news_section').parallax();

	//	parallax end
	//	########################## 


	if (document.documentElement.clientWidth <= 991) {
		/*		##########
  		
  		interesting.html && poducts.html
  		
  		########## */
		$('.slider_top').owlCarousel({
			items: 1.5,
			autoWidth: true,
			nav: true,
			loop: false,
			center: true,
			navText: "",
			margin: 50,
			URLhashListener: true,
			autoplayHoverPause: true,
			startPosition: 'URLHash'
		});
	} else {
		//		$('.products__element-min_slider').owlCarousel({
		//			items:6,
		//			nav:true,
		//			loop:false,
		//			navText: "",
		//			URLhashListener:true,
		//			autoplayHoverPause:true,
		//			startPosition: 'URLHash'
		//		});
	}

	if (document.documentElement.clientWidth > 768) {
		$('.products__element-min_slider').owlCarousel({
			nav: true,
			loop: false,
			navText: "",
			URLhashListener: true,
			autoplayHoverPause: true,
			startPosition: 'URLHash',

			responsive: {
				768: {
					items: 4
				},
				991: {
					items: 5
				},
				1200: {
					items: 6
				}
			}
		});
	}
});

window.onload = window.onresize = function () {

	function toggleClass(e, p, className, b) {
		if (b) {
			scrollY >= p ? e.classList.add(className) : e.classList.remove(className);
		} else {
			scrollY <= p ? e.classList.add(className) : e.classList.remove(className);
		}
	}

	if (document.documentElement.clientWidth > 767 && (document.querySelector(".page-fixed_header") || document.querySelector(".page-fixed_footer"))) {
		var h = document.querySelector(".page-fixed_header header"),
		    f = document.querySelector(".page-fixed_footer footer");
		if (h) {
			var hh = 230;
			toggleClass(h, 230, 'min_header', 1);
			document.addEventListener("scroll", function () {
				toggleClass(h, 230, 'min_header', 1);
			});
		}
		if (f) {
			var fh = document.querySelector('.page-fixed_footer').getBoundingClientRect().height - document.documentElement.clientHeight - 217;

			scrollY <= fh ? f.classList.add("min_footer") : f.classList.remove("min_footer");

			document.addEventListener("scroll", function () {
				var w = document.documentElement.clientWidth;
				if (w < 1200) {
					toggleClass(f, fh + 50, 'min_footer', 0);
				} else {
					toggleClass(f, fh, 'min_footer', 0);
				}
			});
		}
	} else if (document.documentElement.clientWidth <= 991) {
		document.querySelector('.page-fixed_footer footer').classList.remove('min_footer');
	}

	$(".modal .modal_wrap").each(function () {
		var wh = $(window).height();
		var mh = $(this).height();
		if (wh > mh) {
			$(this).css("margin-top", (wh - mh) / 2 + "px");
		}
	});

	//	$(window).load(function() {
	//
	//		$(".loader_inner").fadeOut();
	//		$(".loader").delay(400).fadeOut("slow");
	//
	//	});


	//	if(window.pageYOffset >= 250 && $(window).width()>767)
	//	{
	//		$(".home_page header").addClass("min_header");
	//	}
	//	if((window.pageYOffset <= $(".home_page").height()-$(window).height()) && $(window).width()>767)
	//	{
	//		$("footer").addClass("min_footer");
	//	}
};

function show_modal(modal_id) {
	$(modal_id).removeClass("hideModal");
	$("body").addClass("overflov_hidden");
}

function focus_on_coordinates(coordinates) {
	myMap.panTo(coordinates, { delay: 1500 });
}