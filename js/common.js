"use strict";function showProduct(){$(".products__element").hide(),$(".products__element-min_slider").each(function(){-1==$(this).attr("style").indexOf("none")&&$("#"+$(this).find(".products__element-min").eq(0).attr("data-cnl-tab")).show()})}function show_modal(a){$(a).removeClass("hideModal"),$("body").addClass("overflov_hidden")}function focus_on_coordinates(a){myMap.panTo(a,{delay:1500})}$(document).ready(function(){$(".products__element-min").each(function(){this.innerHTML='<div class="figural-shadow"><img src="'+this.getAttribute("data-url")+'" alt="Мясо" class="figural-shadow__img"></div><span>'+this.getAttribute("data-name")+" ›</span>"}),$(".news_owl_carousel").owlCarousel({loop:!0,margin:0,nav:!0,items:1,lazyLoad:!0,navText:["",""],dots:!0}),$(".cook_owl_carousel").owlCarousel({loop:!0,margin:0,nav:!0,items:1,lazyLoad:!0,navText:["",""],dots:!1}),$("a.slide_down, a.slide_up").anchor({transitionDuration:1200}),$(".num-list__item.cnl-tab").click(function(){var a=$(this).attr("data-cnl-cont"),t=$(this).attr("data-cnl-tab");$(".num-list__item.cnl-tab").removeClass("active"),$(this).addClass("active"),$("#"+a).children().hide(),$("#"+t).show(),$(window).width()>768?showProduct():($(".products__element").hide(),$("#"+t).find(".products__element-min").each(function(){$("#"+$(this).attr("data-cnl-tab")).show()}))}),$(window).width()>768?($(".interesting__scroll").mCustomScrollbar({}),$(".products__element").hide(),$(".products__element-min.cnl-tab").click(function(){$("#"+$(this).attr("data-cnl-cont")).children().hide(),$("#"+$(this).attr("data-cnl-tab")).show()}),$(".products__element-min_slider").each(function(){$(this).attr("style")||$("#"+$(this).find(".products__element-min").eq(0).attr("data-cnl-tab")).show()})):($(".products__element").hide(),$("#"+$(".num-list__item.active").attr("data-cnl-tab")).find(".products__element-min").each(function(){$("#"+$(this).attr("data-cnl-tab")).show()}))}),$(window).load(function(){$(".loader_inner").fadeOut(),$(".loader").delay(400).fadeOut("slow"),$("#carousel").flexslider({animation:"slide",controlNav:!1,animationLoop:!1,slideshow:!1,itemWidth:150,minItems:2,maxItems:3,itemMargin:16,prevText:"",nextText:""}),$(".history_modal .text").mCustomScrollbar({}),$(".newsModal .text").mCustomScrollbar({}),$(".modal .close").on("click",function(){$(this).parents(".modal").addClass("hideModal"),$("body").removeClass("overflov_hidden")}),$("footer .search .end").on("click",function(){$(this).parents(".search").addClass("open"),$("#search").focus()}),$("#search").blur(function(){$("footer .search").removeClass("open")}),$("header nav li a").on("click",function(){$(this).parents("li").hasClass("open_submenu")?$(".open_submenu").removeClass("open_submenu"):($(".open_submenu").removeClass("open_submenu"),$(this).parents("li").addClass("open_submenu"))}),$(".mob_menu_btn").on("click",function(){$("nav").toggleClass("active")}),$("#cook_section").parallax(),$("#buy_section").parallax(),$("#news_section").parallax(),document.documentElement.clientWidth<=991&&$(".slider_top").owlCarousel({items:1.5,autoWidth:!0,nav:!0,loop:!1,center:!0,navText:"",margin:50,URLhashListener:!0,autoplayHoverPause:!0,startPosition:"URLHash"}),document.documentElement.clientWidth>768&&$(".products__element-min_slider").owlCarousel({nav:!0,loop:!1,navText:"",URLhashListener:!0,autoplayHoverPause:!0,startPosition:"URLHash",responsive:{768:{items:4},991:{items:5},1200:{items:6}}})}),window.onload=window.onresize=function(){function a(a,t,e,i){i?scrollY>=t?a.classList.add(e):a.classList.remove(e):scrollY<=t?a.classList.add(e):a.classList.remove(e)}if(document.documentElement.clientWidth>767&&(document.querySelector(".page-fixed_header")||document.querySelector(".page-fixed_footer"))){var t=document.querySelector(".page-fixed_header header"),e=document.querySelector(".page-fixed_footer footer");if(t){a(t,230,"min_header",1),document.addEventListener("scroll",function(){a(t,230,"min_header",1)})}if(e){var i=document.querySelector(".page-fixed_footer").getBoundingClientRect().height-document.documentElement.clientHeight-217;scrollY<=i?e.classList.add("min_footer"):e.classList.remove("min_footer"),document.addEventListener("scroll",function(){document.documentElement.clientWidth<1200?a(e,i+50,"min_footer",0):a(e,i,"min_footer",0)})}}else document.documentElement.clientWidth<=991&&document.querySelector(".page-fixed_footer footer").classList.remove("min_footer");$(".modal .modal_wrap").each(function(){var a=$(window).height(),t=$(this).height();a>t&&$(this).css("margin-top",(a-t)/2+"px")})};