let scrollable = document.getElementById("scrollable-area")

function animate_css(el, props, trans, callback = () => {}) {
    el.animate(props, trans).onfinish = (e) => {
        for (const prop of props) {
            el.style[Object.getOwnPropertyNames(prop)[0]] = prop[Object.getOwnPropertyNames(prop)[0]]
        }
        callback()
    }
}

function set_root_var(name, value) {
    document.documentElement.style.setProperty(name, value)
}

for (let i = 0; i < document.querySelectorAll(".pseudo-active"); i++) {
    document.querySelectorAll(".pseudo-active")[i].addEventListener("ontouchstart", (e) => {
        e.preventDefault()
        return true
    }, false)
}