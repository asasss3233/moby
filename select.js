window.select_inited = false
window.init_selects = () => {
    select_inited = true
    for (let i = 0; i < document.querySelectorAll(".custom-select").length; i++) {
        let selElmnt = document.querySelectorAll(".custom-select")[i].getElementsByTagName("select")[0];

        let a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        document.querySelectorAll(".custom-select")[i].appendChild(a);

        let b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (let j = 1; j < selElmnt.length; j++) {
            let c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function (e) {
                let y, i, k, s, h, sl, yl
                s = this.parentNode.parentNode.getElementsByTagName("select")[0]
                sl = s.length
                h = this.parentNode.previousSibling
                for (i = 0; i < sl; i++) {
                    if (s.options[i].innerHTML === this.innerHTML) {
                        s.selectedIndex = i
                        h.innerHTML = this.innerHTML
                        y = this.parentNode.getElementsByClassName("same-as-selected")
                        yl = y.length
                        for (k = 0; k < yl; k++) {
                            y[k].removeAttribute("class")
                        }
                        this.setAttribute("class", "same-as-selected")
                        break
                    }
                }
                h.click()
            });
            b.appendChild(c)
        }
        document.querySelectorAll(".custom-select")[i].appendChild(b)
        a.addEventListener("click", function (e) {
            e.stopPropagation()
            closeAllSelect(this)
            this.nextSibling.classList.toggle("select-hide")
            this.classList.toggle("select-arrow-active")
        })
    }

    function closeAllSelect(el) {
        let y, xl, yl, arrNo = []
        y = document.getElementsByClassName("select-selected")
        xl = document.getElementsByClassName("select-items").length
        yl = y.length
        for (let i = 0; i < yl; i++) {
            if (el === y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active")
            }
        }
        for (let i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
                document.getElementsByClassName("select-items")[i].classList.add("select-hide")
            }
        }
    }

    document.addEventListener("click", closeAllSelect)
}
