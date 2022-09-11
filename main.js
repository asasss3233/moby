let current_tab = ""
let modular_content = document.getElementById("modular-content")

let server_ip = "http://192.168.159.159:4000/"
let user_id = sessionStorage.getItem("uuid")

let categories = {
    "Выберите категорию": 0,
    "Спорт": 1,
    "Киберспорт": 2,
    "Наука": 3,
    "Фитнес": 4,
    "Концерт": 5,
    "Развлечения": 6,
    "Квест": 7,
    "Кино": 8,
    "Искусство": 9,
    "Мультфильмы": 10,
    "Другое": 11,
}

function request_data(method, success, fail = () => {}) {
    const request = new XMLHttpRequest();
    request.onload = function() {
        if (request.status === 200) {
            let d = String(JSON.parse(request.response)).replaceAll("False", "false").replaceAll("True", "true").replaceAll("'", "\"")
            success(JSON.parse(d))
        } else {
            fail()
        }
    }
    request.open("GET", server_ip+method, true);
    request.send();
}

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
    if (url !== current_tab) {
        for (let i = 0; i < document.querySelectorAll(".modular").length; i++) {
            document.querySelectorAll(".modular")[i].remove()
        }
        for (let i = 0; i < document.head.querySelectorAll(".modular").length; i++) {
            document.head.querySelectorAll(".modular")[i].remove()
        }
        animate_css(modular_content, [{opacity: "0"}], {duration: 150, easing: "cubic-bezier(0.22, 1, 0.36, 1)"}, () => {
            fetch(url).then((response) => response.text().then((data) => {
                let data_without_scripts = data.split("\n")
                let contents = data_without_scripts.pop()
                let scripts = contents.split("&")
                for (const i in scripts) {
                    let lol = document.querySelectorAll(`script[src="${scripts[i]}"]`)
                    if (lol.length === 0) {
                        let se = document.createElement("script")
                        se.src = scripts[i]
                        se.classList.add("modular")
                        console.log(scripts[i])
                        document.body.append(se)
                    }
                }
                current_tab = url
                modular_content.innerHTML = data_without_scripts.join("")
                animate_css(modular_content, [{opacity: "1"}], {duration: 150, delay: 150, easing: "cubic-bezier(0.22, 1, 0.36, 1)"})
            }))
        })
    }
}