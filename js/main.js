    ymaps.ready(function () {
      var myMap = new ymaps.Map("map", {
          center: [59.938660, 30.33404], //координаты карты
          zoom: 16 //приближение карты
        }),
        myPlacemark = new ymaps.Placemark([59.938154, 30.32280], {
          hintContent: 'Gllacy'
        }, {
          iconLayout: "default#image",
          iconImageHref: "img/pin.png", //  путь до картинки
          iconImageSize: [79, 139], //размер картинки
          iconImageOffset: [-25, -205] //смещение ножки балуна относительно левого верхнего угла. 
        });


      myMap.geoObjects.add(myPlacemark);
    });

[[59.93404604470855,30.315830113799887],[59.944005318703724,30.351879002960047]]