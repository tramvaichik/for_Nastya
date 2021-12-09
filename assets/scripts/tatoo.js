let tatoo = [
    "/assets/images/tatoo/тату.jpeg",
    "/assets/images/tatoo/anchor_t.jpeg",
    "/assets/images/tatoo/dolphin_t.jpeg",
    "/assets/images/tatoo/owl_t.jpeg",
    "/assets/images/tatoo/paints_t.jpeg",
    "/assets/images/tatoo/sketches_t.jpeg"
]

let counter = -1;

function tatooImgPrev() {
    let img = document.getElementById("tatoo");
    if (counter < tatoo.length - 1)
        counter ++
    else {
        counter = 0
    }
    img.src = tatoo[counter];
}

function tatooImgNext() {
    let img = document.getElementById("tatoo");
    if (counter > 0)
        counter --
    else {
        counter = tatoo.length - 1
    }
    img.src = tatoo[counter];
}