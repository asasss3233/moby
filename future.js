request_data("get_booking_event/" + user_id, (d) => {
    console.log(d)
    let el = `<div class="card" onclick="">
          <img src="/loc-images/themoon.png" alt="">
          <div class="header">
            <p>${d["title"]}</p>
          </div>
        </div>`
})

init_selects()