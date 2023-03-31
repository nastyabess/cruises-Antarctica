let ymaps;
ymaps.ready(init);

function init() {
  let myMap = new ymaps.Map('map', {
    // Координаты центра карты
    center: [55.72418355036728, 37.50472259430868],
    // Масштаб карты
    zoom: 16,
    // Выключаем все управление картой
    controls: [],
  });

  let myGeoObjects = [];

  // Указываем координаты метки
  myGeoObjects = new ymaps.Placemark([55.72418355036728, 37.50472259430868], {
    balloonContentBody: '',
  }
  , {
    iconLayout: 'default#image',
    // Путь до нашей картинки
    iconImageHref: 'img/sprite/pin-icon.svg',
    // Размеры иконки
    iconImageSize: [18, 22],
    // Смещение верхнего угла относительно основания иконки
    iconImageOffset: [-9, -11],
  });

  let clusterer = new ymaps.Clusterer({
    clusterDisableClickZoom: false,
    clusterOpenBalloonOnClick: false,
  });

  clusterer.add(myGeoObjects);
  myMap.geoObjects.add(clusterer);
  // Отключим zoom
  myMap.behaviors.disable('scrollZoom');

}
