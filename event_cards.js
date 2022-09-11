window.ec_show_comments = (eid) => {
    document.getElementById("comments").innerHTML = "<p>Коментарии отсутсвуют</p>"
    request_data("get_comments/" + eid, (d) => {
        for (let i = 0; i < d.length; i++) {
            el = `<div class="comment">
          <div class="header">
            <div>
              <img src="/loc-images/sydbarret.png" alt="">
            </div>
            <p>${d[i]["username"]}</p>
          </div>
          <p>${d[i]["content"]}</p>
        </div>`
            document.getElementById("comments").innerHTML += el
        }
    })
}

window.render_cards = (cards, id, sliding_overlay_id) => {
    document.getElementById(id).innerHTML = ""
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i]
        console.log(card)
        let dt = card["date"] + " в " + card["time"] + " " + card["place"]
        let el = `
        <div class="card" onclick="open_sliding_overlay_v2('/loc-images/thewall.png', '${card["title"]}', '${dt}', '${card['content']}', ec_show_comments, '${sliding_overlay_id}', ${card['id']})">
          <img src="/loc-images/themoon.png" alt="">
          <div class="header">
              <p>${card["title"]}</p>
          </div>
        </div>`
        document.getElementById(id).innerHTML += el
    }
}