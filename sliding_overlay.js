let opened_sliding_overlay_index = 0 // maximum can be 2 since there are only one case in which it is possible that 2 sliding overlays are opened simoultaneously one after the other

function pop_sliding_overlay() {
    opened_sliding_overlay_index--
    animate_css(document.querySelectorAll(".sliding-overlay")[opened_sliding_overlay_index], [{transform: "translateX(100vw)"}], {duration: 200, easing: "cubic-bezier(0.22, 1, 0.36, 1)"})
}

function switch_sliding_overlay_tab(content) {
    if (opened_sliding_overlay_index === 1) {
        let temp = document.querySelectorAll(".sliding-tabs p")[0].innerText
        document.querySelectorAll(".sliding-tabs p")[0].innerText = document.querySelectorAll(".sliding-tabs p")[1].innerText
        document.querySelectorAll(".sliding-tabs p")[1].innerText = temp
    }
    if (opened_sliding_overlay_index === 2) {
        let temp = document.querySelectorAll(".sliding-tabs p")[2].innerText
        document.querySelectorAll(".sliding-tabs p")[2].innerText = document.querySelectorAll(".sliding-tabs p")[3].innerText
        document.querySelectorAll(".sliding-tabs p")[3].innerText = temp
    }

    document.querySelectorAll(".tab-content")[opened_sliding_overlay_index].innerHTML = content
}

function open_sliding_overlay(logo_url, channel_name, subscribers_amount, sliding_tabs_labels, content) {
    document.querySelectorAll(".brief-channel div img")[opened_sliding_overlay_index].src = logo_url
    document.querySelectorAll(".brief-channel h3")[opened_sliding_overlay_index].innerText = channel_name
    document.querySelectorAll(".brief-channel p")[opened_sliding_overlay_index].innerText = subscribers_amount
    document.querySelectorAll(".tab-content")[opened_sliding_overlay_index].innerHTML = content

    if (opened_sliding_overlay_index === 1) {
        document.querySelectorAll(".sliding-tabs p")[0].innerText = sliding_tabs_labels[0]
        document.querySelectorAll(".sliding-tabs p")[1].innerText = sliding_tabs_labels[1]
    }
    if (opened_sliding_overlay_index === 2) {
        document.querySelectorAll(".sliding-tabs p")[2].innerText = sliding_tabs_labels[0]
        document.querySelectorAll(".sliding-tabs p")[3].innerText = sliding_tabs_labels[1]
    }

    animate_css(document.querySelectorAll(".sliding-overlay")[opened_sliding_overlay_index], [{transform: "translateX(0vw)"}], {duration: 200, delay: 50})
    opened_sliding_overlay_index++
}