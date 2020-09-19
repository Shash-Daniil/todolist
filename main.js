let btn   = document.querySelector(".do_btn")
let input = document.querySelector(".do_input")
let list  = document.querySelector(".do_list")

function createElem(content) {
    let del = document.createElement("span")
    let important = document.createElement("span")
    important.textContent = "follow"
    important.className = "important"
    del.className = "del_btn"
    del.textContent = "Remove"

    let newElem = document.createElement("p")
    newElem.textContent = content
    newElem.style.background = "rgb(136, 221, 255)"
    newElem.className = "do_elem"

    important.addEventListener("click", () => {
        if(newElem.style.background == "rgb(136, 221, 255)") {
            newElem.style.background = "rgb(25, 0, 255)"
            important.textContent = "unfollow"
        }
        else {
            important.textContent = "follow"
            newElem.style.background = "rgb(136, 221, 255)"
        }
    })

    del.addEventListener("click", () => {
        list.removeChild(newElem)
    })
    newElem.appendChild(del)
    newElem.appendChild(important)
    list.appendChild(newElem)
}

btn.addEventListener("click", a => {
    a.preventDefault()
    if(!(input.value === "Do:" || input.value === "")) {
        createElem(input.value)
        input.value = "Do:"
    }
})

input.addEventListener("focus", () => {
    if(input.value === "Do:")
        input.value = ""
})

input.addEventListener("blur", () => {
    if(input.value === "")
        input.value = "Do:"
})