var finishedChecking = false;
var imgArray = new Array();

for (let i = 0; i <= 24; i++) {
    const img = new Image();
    img.src = 'resources/image/t' + i.toString().padStart(2, "0") + '.jpg';
    img.onload = () => imageExist(i, img);
}

function imageExist(e, img) {
    const bg = document.createElement("div")
    bg.style.backgroundImage = `url('resources/image/t${e.toString().padStart(2, "0")}.jpg')`
    bg.classList.add('background')
    bg.id = 'b' + e.toString().padStart(2, "0")
    document.body.appendChild(bg)
    imgArray.push(img);
    console.log("loaded", e)
    if (imgArray.length == 23) start()
}


var myHover = 1
function start() {
    const TAGELEMENTS = document.getElementsByClassName("tags")
    const BGELEMENTS = document.getElementsByClassName("background")
    for (let e = 0; e <= 23; e++) {
        const x = e.toString().padStart(2, "0")
        const element = document.getElementById(`t${x}`)
        element.addEventListener('mouseover',  () => {
            for (const f of BGELEMENTS) f.style.opacity = (f.id != 'b' + x) ? "0": "1"
            for (const r of TAGELEMENTS) r.style.opacity = (r != element) ? "0.2": "1"
            
        });
        element.addEventListener("mouseout", function () {
            for (const o of TAGELEMENTS) o.style.opacity = "1"
            for (const f of BGELEMENTS) f.style.opacity = "0"
        });
    }
}
