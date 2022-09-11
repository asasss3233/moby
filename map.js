window.events = []
window.myMap = null

window.events = []

ymaps.ready(function () {
    myMap = new ymaps.Map('satellite-map', {
            center: [55.751574, 37.573856],
            controls: [],
            zoom: 5
        }, {
            searchControlProvider: 'yandex#search'
        })

    request_data("/get_events", (d) => {
        events = d
        for (let i = 0; i < d.length; i++) {
            let myPlacemark = new ymaps.Placemark(events[i]["place"], {}, {
                iconLayout: 'default#image',
                iconImageHref: '/loc-images/placemark.png',
                iconImageSize: [324 * 0.4, 436 * 0.4],
                iconImageOffset: [-162*0.4, -341*0.4]
            })

            myPlacemark.events.add(["click"], (e) => {
                open_bottom_popup(events[i]["title"], events[i]["content"], events[i]["date"], events[i]["time"])
                document.getElementById("satellite-map").style.pointerEvents = "none"
            })


            myMap.geoObjects.add(myPlacemark)
        }
    })
    //
    //     let myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
    //         iconLayout: 'default#image',
    //         iconImageHref: '/loc-images/placemark.png',
    //         iconImageSize: [324 * 0.4, 436 * 0.4],
    //         iconImageOffset: [-162*0.4, -341*0.4]
    //     })
    //
    // myPlacemark.events.add(["click"], (e) => {
    //     open_bottom_popup(events[i]["title"], events[i]["content"], events[i]["date"], events[i]["time"])
    //     document.getElementById("satellite-map").style.pointerEvents = "none"
    // })



    myMap.setType("yandex#hybrid")
})