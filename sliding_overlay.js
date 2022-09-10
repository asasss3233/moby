let overlays = 0

function close_sliding_overlay(id) {
    let el = document.querySelector(`.so-${id}`)
    animate_css(el, [{transform: "translateX(100vw)"}], {duration: 200}, () => {
        el.remove()
        overlays--
    })
}

function open_sliding_overlay(logo_url, channel_name, subscribers_amount, description) {
    let sliding_overlay = `
    <div id="sliding-overlay" class="so-${overlays}">
        <div id="sliding-overlay-wrapper">
            <div id="back-button" onclick="close_sliding_overlay(${overlays})"><p>􀱍</p></div>
            <div class="brief-channel">
                <div id="icon"><img src="${logo_url}" alt=""></div>
                <h3 id="channel">${channel_name}</h3>
                <p id="subscriptions">${subscribers_amount}</p>
            </div>
            <div class="sliding-tabs">
                <p id="tab-1-heading" class="active">описание</p>
                <p id="tab-1-content">мероприятия</p>
            </div>
            <div class="tab-content">
                <p>${description}</p>
            </div>
        </div>
    </div>`

    document.body.innerHTML = sliding_overlay + document.body.innerHTML
    overlays++
}