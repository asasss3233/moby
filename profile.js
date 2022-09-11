request_data("get_user/" + sessionStorage.getItem("uuid"), (d) => {
    document.querySelector(".profile-wrapper .brief-channel img").src = "/loc-images/ava.png"
    document.querySelector(".profile-wrapper .brief-channel h3").innerText = d["name"]
    document.querySelector(".profile-wrapper .brief-channel p").innerText = d["rate"]
    document.querySelector(".profile-wrapper .description").innerText = d["about"]
})

document.getElementById("jumbo-button").onclick = () => {
    request_data(`new_event/${document.getElementById("event_name").innerText}/${document.getElementById("description").innerText}/${document.getElementById("date").innerText.split(", ").join("/")}/${document.getElementById("location").innerText}/${categories[document.getElementById("category").value]}`, (d) => {
        console.log(d)
        close_sliding_overlay("new-event")
    })
}

init_selects()