
window.close_sliding_overlay = (el) => {
    animate_css(el, [{transform: "translateX(100vw)"}], {duration: 200, easing: "cubic-bezier(0.22, 1, 0.36, 1)"})
}

window.open_sliding_overlay_v1 = (logo_url, channel_name, subscribers_amount, description, cards, id) => {
    let el = document.getElementById(id)
    el.children[0].children[1].children[0].children[0].src = logo_url
    el.children[0].children[1].children[1].innerText = channel_name
    el.children[0].children[1].children[2].innerText = subscribers_amount
    el.children[0].children[2].children[1].innerText = description

    animate_css(el, [{transform: "translateX(0vw)"}], {duration: 200, delay: 50})
}

window.open_sliding_overlay_v2 = (logo_url, event_name, event_date, description, cards, id) => {
    let el = document.getElementById(id)
    console.log(el.children[0])
    el.children[0].children[1].children[0].src = logo_url
    el.children[0].children[2].innerText = event_name
    el.children[0].children[3].innerText = event_date
    el.children[0].children[4].children[1].innerText = description

    animate_css(el, [{transform: "translateX(0vw)"}], {duration: 200, delay: 50})
}
