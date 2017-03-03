ymaps.ready(init);

var myMap, myPlacemark, districtCollections;
//массив обьектов районов
var markMags = [//фирмовый магазин
{
	district: "district1",
	mags: [{
		name: "Велес ТЦ",
		adr: "ул. Толстого, 32а",
		time: "09:00 - 22:00",
		coordinates: [43.121116074495795, 131.9132434]
	}]
}, //магазины города
{
	district: "district2",
	mags: [{
		name: "Велес ТЦ2",
		adr: "ул. Толстого, 32а",
		time: "09:00 - 22:00",
		coordinates: [43.122116074495795, 131.9132434]
	}, {
		name: "Кольцевой ТЦ",
		adr: "пр-т Кр. Знамени, 86а",
		time: "09:00 - 22:00",
		coordinates: [43.12649857453184, 131.91540749999996]
	}, {
		name: "Пять с плюсом / 5+ (сеть)",
		adr: "ул. Некрасовская, 76",
		time: "08:00 - 23:00",
		coordinates: [43.12686707450806, 131.9110415]
	}, {
		name: "ОК супермаркет (сеть)",
		adr: "пр-т Кр. Знамени, 82",
		time: "09:00 - 21:00",
		coordinates: [43.127137074508755, 131.9131259999999]
	}, {
		name: "ОК супермаркет (сеть)",
		adr: "ул. Некрасовская, 29",
		time: "09:00 - 21:00",
		coordinates: [43.123162574523244, 131.9065415]
	}, {
		name: "24 часа",
		adr: "пр-т Кр. Знамени, 111",
		time: "09:00 - 21:00",
		coordinates: [43.12680107450784, 131.91901899999996]
	}]
}, {
	district: "district3",
	mags: [{
		name: "Велес ТЦ2",
		adr: "ул. Толстого, 32а",
		time: "09:00 - 22:00",
		coordinates: [43.121116074495795, 131.9132434]
	}, {
		name: "Кольцевой ТЦ",
		adr: "пр-т Кр. Знамени, 86а",
		time: "09:00 - 22:00",
		coordinates: [43.12549857453184, 131.91540749999996]
	}, {
		name: "Пять с плюсом / 5+ (сеть)",
		adr: "ул. Некрасовская, 76",
		time: "08:00 - 23:00",
		coordinates: [43.12586707450806, 131.9110415]
	}, {
		name: "ОК супермаркет (сеть)",
		adr: "пр-т Кр. Знамени, 82",
		time: "09:00 - 21:00",
		coordinates: [43.126137074508755, 131.9131259999999]
	}, {
		name: "ОК супермаркет (сеть)",
		adr: "ул. Некрасовская, 29",
		time: "09:00 - 21:00",
		coordinates: [43.122162574523244, 131.9065415]
	}, {
		name: "24 часа",
		adr: "пр-т Кр. Знамени, 111",
		time: "09:00 - 21:00",
		coordinates: [43.12580107450784, 131.91901899999996]
	}]
}, {
	district: "district4",
	mags: [{
		name: "Велес ТЦ2",
		adr: "ул. Толстого, 32а",
		time: "09:00 - 22:00",
		coordinates: [43.121116074495795, 131.9132434]
	}, {
		name: "Кольцевой ТЦ",
		adr: "пр-т Кр. Знамени, 86а",
		time: "09:00 - 22:00",
		coordinates: [43.12549857453184, 131.91540749999996]
	}, {
		name: "Пять с плюсом / 5+ (сеть)",
		adr: "ул. Некрасовская, 76",
		time: "08:00 - 23:00",
		coordinates: [43.12586707450806, 131.9110415]
	}, {
		name: "ОК супермаркет (сеть)",
		adr: "пр-т Кр. Знамени, 82",
		time: "09:00 - 21:00",
		coordinates: [43.126137074508755, 131.9131259999999]
	}, {
		name: "ОК супермаркет (сеть)",
		adr: "ул. Некрасовская, 29",
		time: "09:00 - 21:00",
		coordinates: [43.122162574523244, 131.9065415]
	}, {
		name: "24 часа",
		adr: "пр-т Кр. Знамени, 111",
		time: "09:00 - 21:00",
		coordinates: [43.12580107450784, 131.91901899999996]
	}]
}, {
	district: "district5",
	mags: [{
		name: "Велес ТЦ2",
		adr: "ул. Толстого, 32а",
		time: "09:00 - 22:00",
		coordinates: [43.121116074495795, 131.9132434]
	}, {
		name: "Кольцевой ТЦ",
		adr: "пр-т Кр. Знамени, 86а",
		time: "09:00 - 22:00",
		coordinates: [43.12549857453184, 131.91540749999996]
	}, {
		name: "Пять с плюсом / 5+ (сеть)",
		adr: "ул. Некрасовская, 76",
		time: "08:00 - 23:00",
		coordinates: [43.12586707450806, 131.9110415]
	}, {
		name: "ОК супермаркет (сеть)",
		adr: "пр-т Кр. Знамени, 82",
		time: "09:00 - 21:00",
		coordinates: [43.126137074508755, 131.9131259999999]
	}, {
		name: "ОК супермаркет (сеть)",
		adr: "ул. Некрасовская, 29",
		time: "09:00 - 21:00",
		coordinates: [43.122162574523244, 131.9065415]
	}, {
		name: "24 часа",
		adr: "пр-т Кр. Знамени, 111",
		time: "09:00 - 21:00",
		coordinates: [43.12580107450784, 131.91901899999996]
	}]
}, {
	district: "district6",
	mags: [{
		name: "Велес ТЦ2",
		adr: "ул. Толстого, 32а",
		time: "09:00 - 22:00",
		coordinates: [43.121116074495795, 131.9132434]
	}, {
		name: "Кольцевой ТЦ",
		adr: "пр-т Кр. Знамени, 86а",
		time: "09:00 - 22:00",
		coordinates: [43.12549857453184, 131.91540749999996]
	}, {
		name: "Пять с плюсом / 5+ (сеть)",
		adr: "ул. Некрасовская, 76",
		time: "08:00 - 23:00",
		coordinates: [43.12586707450806, 131.9110415]
	}, {
		name: "ОК супермаркет (сеть)",
		adr: "пр-т Кр. Знамени, 82",
		time: "09:00 - 21:00",
		coordinates: [43.126137074508755, 131.9131259999999]
	}, {
		name: "ОК супермаркет (сеть)",
		adr: "ул. Некрасовская, 29",
		time: "09:00 - 21:00",
		coordinates: [43.122162574523244, 131.9065415]
	}, {
		name: "24 часа",
		adr: "пр-т Кр. Знамени, 111",
		time: "09:00 - 21:00",
		coordinates: [43.12580107450784, 131.91901899999996]
	}]
}, ];

function init() {
	myMap = new ymaps.Map("map",{
		center: [43.121116074495795, 131.912434],
		zoom: 15,
		controls: ['zoomControl', 'fullscreenControl']
	});

	// массив коллекций меток районов
	districtCollections = [new ymaps.GeoObjectCollection(null,{
		iconLayout: 'default#image',
		iconImageHref: 'img/swg/map-marker.svg',
		iconImageSize: [28, 28],
		iconImageOffset: [-10, -28],
		iconMaxHeight: 28,
		iconMaxWidth: 28
	}), new ymaps.GeoObjectCollection(null,{
		iconLayout: 'default#image',
		iconImageHref: 'img/swg/map-marker.svg',
		iconImageSize: [28, 28],
		iconImageOffset: [-10, -28]
	}), new ymaps.GeoObjectCollection(null, {
	   iconLayout: 'default#image',
	   iconImageHref: 'img/swg/map-marker.svg',
	   iconImageSize: [28, 28],
	   iconImageOffset: [-10, -28]
	 }), 
	 new ymaps.GeoObjectCollection(null, {
	   iconLayout: 'default#image',
	   iconImageHref: 'img/swg/map-marker.svg',
	   iconImageSize: [28, 28],
	   iconImageOffset: [-10, -28]
	 }), 
	 new ymaps.GeoObjectCollection(null, {
	   iconLayout: 'default#image',
	   iconImageHref: 'img/swg/map-marker.svg',
	   iconImageSize: [28, 28],
	   iconImageOffset: [-10, -28]
	 }), 
	 new ymaps.GeoObjectCollection(null, {
	   iconLayout: 'default#image',
	   iconImageHref: 'img/swg/map-marker.svg',
	   iconImageSize: [28, 38],
	   iconImageOffset: [-10, -28]
	 })
	];

	// вывод всех колекций на карту
	print_all_mags();
	// myMap.setBounds(districtCollections[0].getBounds());
}
;
$(document).ready(function() {

	$("section.map .mag_list .name").on("click", function() {
		$(this).parents("ul").children("li").removeClass("active");
		$(this).parents("li").addClass("active");
		myMap.geoObjects.get(0).get($(this).attr("data-id")).balloon.open();
		myMap.panTo(markMags[parseInt($(this).parents("ul").attr("data-collection"))].mags[$(this).attr("data-id")].coordinates, {
			delay: 1500
		});
	});
	$("section.map .district li").on("click", function() {
		$(this).parents("ul").children("li").removeClass("active");
		$(this).addClass("active");
		$("section.map .mag_list").removeClass("active");
		$("section.map .mag_list#" + $(this).attr('data-tab')).addClass("active");
		myMap.geoObjects.removeAll();
		if ($(this).attr('data-collection') != 0) {
			myMap.geoObjects.add(districtCollections[$(this).attr('data-collection')]);
			myMap.setBounds(districtCollections[$(this).attr('data-collection')]);
		} else {
			print_all_mags();
		}

	});
	$("section.map .tab.tab1").on("click", function() {
		$("section.map .tab").removeClass("active");
		$(this).addClass("active");
		$("section.map .mag_list").removeClass("active");
		$("section.map .mag_list#" + $(this).attr('data-tab')).addClass("active");
		myMap.geoObjects.removeAll();
		myMap.geoObjects.add(districtCollections[$(this).attr('data-collection')]);
		myMap.setBounds(districtCollections[$(this).attr('data-collection')]);

	});

	$("section.map .tab.tab2").on("click", function() {
		$("section.map .tab").removeClass("active");
		$(this).addClass("active");
		$("section.map .mag_list").removeClass("active");
		print_all_mags();
	});

});

function print_all_mags() {
	for (var i = 0, l = markMags.length; i < l; i++) {
		for (var j = 0, k = markMags[i].mags.length; j < k; j++) {
			myPlacemark = new ymaps.Placemark(markMags[i].mags[j].coordinates,{
				balloonContent: "<div class='map_info'><h2>" + markMags[i].mags[j].name + "</h2><div class='adr'>" + markMags[i].mags[j].adr + "</div><div class='time'>" + markMags[i].mags[j].time + "</div></div>"
			});
			districtCollections[i].add(myPlacemark);
//			console.log(i, ' - ', districtCollections[i])
		}
		myMap.geoObjects.add(districtCollections[i]);
	}
}
