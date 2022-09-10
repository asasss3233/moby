let bottom_bar = document.getElementById("bottom-bar")

for (let i = 0; i < bottom_bar.children.length; i++) {
    bottom_bar.children[i].onclick = () => {
        document.querySelector(".chosen").classList.remove("chosen")
        bottom_bar.children[i].classList.add("chosen")
    }
}