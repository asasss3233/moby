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

function load_module(url) {
    fetch(url).then((response) => response.text().then((data) => {
        console.log(data)
        let data_without_scripts = data.split("\n")
        let scripts = data_without_scripts.pop().split("&")
        for (const i in scripts) {
            let se = document.createElement("script")
            se.src = scripts[i]
            document.body.append(se)
        }
        document.getElementById("modular-content").innerHTML = data_without_scripts.join("")
    }))
}