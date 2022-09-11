function render_cards(cards, id, sliding_overlay_id) {
    for (let i = 0; i < cards.length; i++) {
        let card = `
        <div class="card" onclick="open_sliding_overlay_v2('/loc-images/thewall.png', ${card["name"]}, ${card["date"]}, ${card["description"]}, [], '${sliding_overlay_id}')">
          <img src="/loc-images/themoon.png" alt="">
          <div class="header">
              <p>${card[0]}</p>
          </div>
        </div>`
    }
}