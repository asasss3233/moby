window.events = []

ymaps.ready(function () {
    let myMap = new ymaps.Map('satellite-map', {
            center: [55.751574, 37.573856],
            controls: [],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        })

        let myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
            iconLayout: 'default#image',
            iconImageHref: '/loc-images/placemark.png',
            iconImageSize: [324 * 0.4, 436 * 0.4],
            iconImageOffset: [-162*0.4, -341*0.4]
        })

    myPlacemark.events.add(["click"], (e) => {
        open_bottom_popup()
        document.getElementById("satellite-map").style.pointerEvents = "none"
    })


    myMap.setType("yandex#hybrid")
    myMap.geoObjects.add(myPlacemark)
})