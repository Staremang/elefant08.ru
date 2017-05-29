ymaps.ready(init);

var myMap, myPlacemark, districtCollections;
//массив обьектов районов

function init() {
	myMap = new ymaps.Map("map",{
		center: [43.121116074495795, 131.912434],
		zoom: 15,
		controls: ['zoomControl', 'fullscreenControl']
	});
	
	// вывод всех колекций на карту
	print_all_mags();
	// myMap.setBounds(districtCollections[0].getBounds());
}
;
$(document).ready(function() {


	$("section.map .tab.tab2").on("click", function() {
		$("section.map .tab").removeClass("active");
		$(this).addClass("active");
		$("section.map .mag_list").removeClass("active");
		print_all_mags();
	});
	var quantity = 0, item;
	for (var i = 0; i <= markMags.length; i++) {
		item = markMags[i]
//	markMags.forEach(function(item, i, arr) {
		if (i === 0) { // фирменные магазины
			$('.map_header').append('<div class="tab tab1" data-tab="megatab1" data-collection="0">Фирменный магазин <div class="cnt">' + item.mags.length + '</div></div>')
			$('.scroll_wrap').append('<ul class="mag_list active" data-collection="' + markMags.length + '" id="allTab"></ul>'); // Все магазины
//			quantity += item.mags.length;
			
		} else if (i === markMags.length) {
			$('.map_header').append('<div class="tab tab2 active"  data-tab="allTab">Магазины города <div class="cnt">' + quantity + '</div></div>');
			$('.district').append('<li class="active" data-tab="allTab" data-collection="' + i + '"><span>Все на карте<div class="cnt">' + quantity + '</div></span></li>');
		} else {
			$('.district').append('<li data-tab="tab' + i + '" data-collection="' + i + '"><span>' + item.district + '<div class="cnt">' + item.mags.length + '</div></span></li>');
			
			$('.scroll_wrap').append('<ul class="mag_list" data-collection="' + i + '" id="tab' + i + '"></ul>');
			for (var l = 0; l < item.mags.length; l++) {
//				console.log(l);
				quantity++;
				$('.scroll_wrap').children(':last-child').append('<li>\
								<div class="name" data-id="' + item.mags[l].id + '" >' + item.mags[l].name + '</div>\
								<span class="adr">' + item.mags[l].adr + '</span>\
								<span class="time">' + item.mags[l].time + '</span>\
							</li>');
				$('.scroll_wrap').children('[id="allTab"]').append('<li>\
								<div class="name" data-id="' + item.mags[l].id + '" >' + item.mags[l].name + '</div>\
								<span class="adr">' + item.mags[l].adr + '</span>\
								<span class="time">' + item.mags[l].time + '</span>\
							</li>');
//				console.log(item.mags[l]);
//				myPlacemark = new ymaps.Placemark(item.mags[l].coordinates, {
//					balloonContent: "<div class='map_info'><h2>" + item.mags[l].name + "</h2><div class='adr'>" + item.mags[l].adr + "</div><div class='time'>" + item.mags[l].time + "</div></div>"
//				});
//				districtCollections[i].add(myPlacemark);
			}
//			myMap.geoObjects.add(districtCollections[i]);
		}
//		console.log(item)
	}

	$(".map .scroll_wrap").mCustomScrollbar({});
	
	/**
	* Выборка по району
	*/
	$("section.map .district li").on("click", function() {
		$(this).parents("ul").children("li").removeClass("active");
		$(this).addClass("active");
		
		$("section.map .mag_list").removeClass("active");
		$("#" + $(this).attr('data-tab')).addClass("active");
		
		/**
		* Удаляем все объекты с карты
		*/
		myMap.geoObjects.removeAll();
	
		/**
		* Суем на карту объекты из массива districtCollections, где начальный и конечный id указаны в первом и последнем блоке
		*/
		for (var i = $("#" + $(this).attr('data-tab')).children(':first-child').children('.name').attr('data-id'), l = $("#" + $(this).attr('data-tab')).children(':last-child').children('.name').attr('data-id'); +i <= +l; i++) {
			myMap.geoObjects.add(districtCollections[+i + markMags[0].mags.length - 1]);
//			myMap.setBounds(districtCollections[+i - 1]);
		}

	});
	
	/**
	* Клик по адресу
	*/
	$("section.map .mag_list .name").on("click", function() { // Выборка по магазину
		$(this).parents("ul").children("li").removeClass("active");
		$(this).parents("li").addClass("active");
		
		myMap.geoObjects.get($(this).attr("data-id") - $(this).parents('ul').children(':first-child').children('.name').attr('data-id')).balloon.open();
		
//		myMap.panTo(markMags[parseInt($(this).parents("ul").attr("data-collection"))].mags[$(this).attr("data-id")].coordinates, {
//			delay: 1500
//		});
	});
	$("section.map .tab.tab1").on("click", function() {
		$("section.map .tab").removeClass("active");
		$(this).addClass("active");
		
		$("section.map .mag_list").removeClass("active");
		$("section.map .mag_list#" + $(this).attr('data-tab')).addClass("active");
		myMap.geoObjects.removeAll();
		
		for (var i = $("#" + $(this).attr('data-tab')).children(':first-child').children('.name').attr('data-id'), l = $("#" + $(this).attr('data-tab')).children(':last-child').children('.name').attr('data-id'); +i <= +l; i++) {
			myMap.geoObjects.add(districtCollections[+i + markMags[0].mags.length - 1]);
//			myMap.setBounds(districtCollections[+i - 1]);
		}
//		myMap.setBounds(districtCollections[$(this).attr('data-collection')]);

	});
	$("section.map .tab.tab2").on("click", function() {
		$("section.map .tab").removeClass("active");
		$(this).addClass("active");
		$("section.map .mag_list").removeClass("active");
		$("section.map .mag_list#" + $(this).attr('data-tab')).addClass("active");
		
		print_all_mags();
//		myMap.setBounds(districtCollections[$(this).attr('data-collection')]);

	});
});

function print_all_mags() {
	districtCollections = []; // Обнуляем массив меток
	for (var i = 0, l = markMags.length; i < l; i++) {
		for (var j = 0, k = markMags[i].mags.length; j < k; j++) {
			(function(mark){
				ymaps.geocode(mark.adr, {
					results: 1
				}).then(function (res) {
					var coords = res.geoObjects.get(0).geometry.getCoordinates();

					myPlacemark = new ymaps.Placemark(coords, {
						balloonContent: "<div class='map_info'><h2>" + mark.name + "</h2><div class='adr'>" + mark.adr + "</div><div class='time'>" + mark.time + "</div></div>"
					}, {
						iconLayout: 'default#image',
						iconImageHref: 'img/swg/map-marker.svg',
						iconImageSize: [28, 28],
						iconImageOffset: [-10, -28],
						iconMaxHeight: 28,
						iconMaxWidth: 28
					});

					myMap.geoObjects.add(myPlacemark);
					districtCollections[mark.id] = myPlacemark; // Заносим в массив каждую метку
//					districtCollections[districtCollections.length] = myPlacemark; // Заносим в массив каждую метку
				});
				
				
			})(markMags[i].mags[j])
		}
	}
	
	/**
	* Суем на карту объекты из массива districtCollections, минуя метки фирменных магазинов
	*/
//	for (var i = markMags[0].mags.length; i < districtCollections.length; i++) {
//		myMap.geoObjects.add(districtCollections[+i]);
//	}
}
