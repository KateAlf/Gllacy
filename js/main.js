    ymaps.ready(function () {
      var myMap = new ymaps.Map("map", {
          center: [59.938660, 30.33404], //���������� �����
          zoom: 16 //����������� �����
        }),
        myPlacemark = new ymaps.Placemark([59.938154, 30.32280], {
          hintContent: 'Gllacy'
        }, {
          iconLayout: "default#image",
          iconImageHref: "img/pin.png", //  ���� �� ��������
          iconImageSize: [79, 139], //������ ��������
          iconImageOffset: [-25, -205] //�������� ����� ������ ������������ ������ �������� ����. 
        });


      myMap.geoObjects.add(myPlacemark);
    });

[[59.93404604470855,30.315830113799887],[59.944005318703724,30.351879002960047]]