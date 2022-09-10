function close_sliding_overlay(el) {
    animate_css(el, [{transform: "translateX(100vw)"}], {duration: 200, easing: "cubic-bezier(0.22, 1, 0.36, 1)"})
}

function open_sliding_overlay_v1(logo_url, channel_name, subscribers_amount, description, cards) {
    document.querySelectorAll(".brief-channel div img")[0].src = logo_url
    document.querySelectorAll(".brief-channel h3")[0].innerText = channel_name
    document.querySelectorAll(".brief-channel p")[0].innerText = subscribers_amount
    document.querySelectorAll(".tab-content p")[0].innerText = description

    animate_css(document.querySelectorAll(".sliding-overlay")[0], [{transform: "translateX(0vw)"}], {duration: 200, delay: 50})
}

function open_sliding_overlay_v2(logo_url, event_name, event_date, description, cards) {
    document.querySelectorAll(".sliding-overlay-wrapper .cover img")[0].src = logo_url
    document.querySelectorAll(".sliding-overlay-wrapper .heading")[0].innerText = event_name
    document.querySelectorAll(".sliding-overlay-wrapper .date")[0].innerText = event_date
    document.querySelectorAll(".sliding-overlay-wrapper .tab-content p")[1].innerText = description

    animate_css(document.querySelectorAll(".sliding-overlay")[1], [{transform: "translateX(0vw)"}], {duration: 200, delay: 50})
}
