let overlays = 0

function new_sliding_overlay(logo_url, channel_name, subscribers_amount) {
    let sliding_overlay = `
    <div id="sliding-overlay" class="so-${overlays}">
        <div id="sliding-overlay-wrapper">
            <div id="back-button"><p>􀱍</p></div>
            <div id="icon"><img src="${logo_url}" alt=""></div>
            <h3 id="channel">${channel_name}</h3>
            <p id="subscriptions">${subscribers_amount}</p>
            <div class="sliding-overlay-wrapper">
                <div class="sliding-tab">
                    <h4 id="tab-1-heading">описание</h4>
                    <p id="tab-1-content">мероприятия</p>
                </div>
            </div>
        </div>
    </div>`

    document.body.innerHTML = sliding_overlay + document.body.innerHTML
    overlays++
}