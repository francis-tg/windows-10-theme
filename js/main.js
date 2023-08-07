function openPan(url) {
    const pan = createPan(url)
    pan.classList.add("open")
    document.querySelector("body").appendChild(pan)
    const toRms = document.querySelectorAll(".windows-pan")
    toRms.forEach((toRm) => {
        toRm.querySelector(".fa-times").addEventListener("click", (e) => {
            e.preventDefault()
            toRm.remove()
        })
        /* toRm.querySelector(".fa-square").addEventListener("click", (e) => {
            e.preventDefault()
            toRm.setAttribute("full-screen", true);
            toRm.style.left = 0
            toRm.style.top=0
            toRm.style.width = window.innerWidth + "px"
            toRm.style.height = window.innerHeight - 90 + "px"
            
            
        })
        toRm.querySelector("[full-screen]")&&toRm.querySelector("[full-screen]").querySelector(".fa-square").addEventListener("click", () => {
            e.preventDefault()
            toRm.style.left = "200px"
            toRm.style.top="50px"
            toRm.style.width = "50%"
            toRm.style.height = "720px"
            toRm.removeAttribute("full-screen");
        }) */
        
    })
    
}

function openLink(url){
    window.open(url, "__blank");
}
function createPan(url) {
    const newPan = document.createElement("div");
    const createIframe = document.createElement("iframe")
    newPan.classList.add("windows-pan")
    const actionBtn = document.createElement("div");
    actionBtn.classList.add("action-btns")
    const rmIcon = createIcon("fas","fa-times")
    const sqreIcon = createIcon("far","fa-square")
    const minusIcon = createIcon("fas", "fa-minus")
    actionBtn.appendChild(minusIcon)
    actionBtn.appendChild(sqreIcon)
    actionBtn.appendChild(rmIcon)
    createIframe.src = url
    newPan.appendChild(actionBtn)
    createIframe.setAttribute("X-frame-orign","")
    newPan.appendChild(createIframe)
    return newPan;
    
}

function createIcon(icon_type,custom_class) {
    const i = document.createElement("i");
    i.classList.add(icon_type??"fas")
    i.classList.add(custom_class)
    return i
}