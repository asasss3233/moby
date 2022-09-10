let bottom_popup_wrapper = document.getElementById("bottom-popup-wrapper")

let ignited = false

let drag = false
let opened = false
let drag_inaccuracy = 0
let drag_start_timestamp = 0
let previous_drag_position = 0

let first_touch = 0
let last_touch = 0
let stable_position = 0


function set_stable_position() {
    stable_position = bottom_popup_wrapper.getBoundingClientRect().top
}

function ignite_bottom_popup() {
    if (!ignited) {
        ignited = true
        animate_css(bottom_popup_wrapper, [{transform: `translateY(${innerHeight - 230}px)`}], {
            duration: 200,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)"
        }, set_stable_position)
        dim_preview_animation()
    }
}

function on_drag_end() {
    let current_time = new Date().getTime()
    let dragging_up = first_touch > last_touch

    if (drag) {
        if (Math.abs(stable_position - bottom_popup_wrapper.getBoundingClientRect().top) < 25) {
            animate_css(bottom_popup_wrapper, [{transform: `translateY(${stable_position}px)`}], {duration: 90}, set_stable_position)
        } else {
            let transition = Math.max(Math.min(current_time - drag_start_timestamp, 350), 180)
            if (!dragging_up) {
                bottom_popup_wrapper.scrollTo({top: 0, behavior: "smooth"})
                if (opened) {
                    scrollable.classList.remove("dimmed")
                    animate_css(bottom_popup_wrapper, [{transform: `translateY(${innerHeight - 230}px)`}], {duration: transition, easing: "cubic-bezier(0.22, 1, 0.36, 1)"}, set_stable_position)
                    opened = false
                } else {
                    scrollable.classList.remove("dimmed")
                    animate_css(bottom_popup_wrapper, [{transform: `translateY(${innerHeight}px)`}], {duration: transition * 1.5, easing: "cubic-bezier(0.22, 1, 0.36, 1)"}, set_stable_position)
                    ignited = false
                }
                bottom_popup_wrapper.style.overflowY = "hidden"
            } else {
                if (!opened || (opened && bottom_popup_wrapper.getBoundingClientRect().top < innerHeight / 2)) {
                    scrollable.classList.add("dimmed")
                    animate_css(bottom_popup_wrapper, [{transform: "translateY(0px)"}], {duration: transition * 1.5, easing: "cubic-bezier(0.22, 1, 0.36, 1)"}, () => {
                        set_stable_position()
                        bottom_popup_wrapper.style.overflowY = "auto"
                    })
                    opened = true
                }
            }
        }
    }
    first_touch = 0
    last_touch = 0
    drag_inaccuracy = 0
    drag_start_timestamp = 0
}

bottom_popup_wrapper.ontouchstart = (e) => {
    drag_inaccuracy = e.touches[0].clientY - bottom_popup_wrapper.getBoundingClientRect().top
    if (drag_inaccuracy < 80 && drag_inaccuracy > 25) {
        drag = true
        drag_start_timestamp = new Date().getTime()
    }
}

bottom_popup_wrapper.ontouchend = () => {
    on_drag_end()
    drag = false
}

bottom_popup_wrapper.ontouchcancel = () => {
    on_drag_end()
    drag = false
}

bottom_popup_wrapper.ontouchmove = (e) => {
    let ny = e.touches[0].clientY
    if (drag) {
        if (first_touch === 0) {
            first_touch = ny
        } else {
            last_touch = ny
        }

        let y = ny - drag_inaccuracy
        if (opened && (first_touch > last_touch)) {
            bottom_popup_wrapper.style.transform = `translateY(25px)`
            console.log("kav o blyat")
        } else {
            previous_drag_position = y
            bottom_popup_wrapper.style.transform = `translateY(${y}px)`
        }
    }
}

function dim_preview_animation() {
    if (ignited) {
        set_root_var("--preview-dimming", (Math.pow(1 - (bottom_popup_wrapper.getBoundingClientRect().top + 230) / innerHeight, 1.05) / 0.7160069217846263) || 0)
        return requestAnimationFrame(dim_preview_animation)
    }
}
